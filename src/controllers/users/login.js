const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../../database/connection');

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const user = await knex('usuarios').where('email', email);

        if (user.length === 0) {
            return res.status(400).json({ mensagem: "Email ou senha não confere." });
        }

        const correctPassword = await bcrypt.compare(senha, user[0].senha);

        if (!correctPassword) {
            return res.status(400).json({ mensagem: "Email ou senha não confere." });
        }

        const token = jwt.sign({ id: user[0].id }, process.env.PASSHASH, { expiresIn: '8h' });

        const { senha: _, ...dadosUsuario } = user[0];

        return res.status(200).json({
            user: dadosUsuario,
            token
        });
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
}

module.exports = login;