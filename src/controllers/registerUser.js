const bcrypt = require('bcrypt');
const knex = require('../database/connection');

const registerUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const encryptedPassword = await bcrypt.hash(senha, 10);

       const users = await knex.insert({nome: '', email: '', senha: ''}).into('usuarios');

        if (users == 0) {
            return res.status(400).json("O usuário não foi cadastrado.");
        }

        return res.status(200).json("O usuario foi cadastrado com sucesso!");
    } catch (error) {
        console.error(error)
        return res.status(400).json(error.message);
    }
}

module.exports = registerUser;