const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const hashPassword = require('../hashPassword');
const knex = require('../database/connection');

const login = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(404).json('É obrigatório email e senha');
    }
    
    try {
        const user = await knex('usuarios').where('email', email);
        
        if (user === 0) {
            return res.status(400).json("O usuario não foi encontrado");
        }

        const correctPassword = await bcrypt.compare(senha, user[0].senha);

        if (!correctPassword) {
            return res.status(400).json("Email e senha não confere");
        }

        const token = jwt.sign({ id: user.id }, hashPassword, { expiresIn: '8h' });

        const { senha: _, ...dadosUsuario } = user;

        return res.status(200).json({
            user: dadosUsuario,
            token
        });
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = login;