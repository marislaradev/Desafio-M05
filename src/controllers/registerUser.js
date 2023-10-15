const bcrypt = require('bcrypt');
const knex = require('../database/connection');

const registerUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const verifyEmailUnique = await knex('usuarios').where({ email });

        if (verifyEmailUnique.length > 0) {
            return res.status(400).json({ mensagem: 'Email já existe' });
        }

        const encryptedPassword = await bcrypt.hash(senha, 10);

        const users = await knex.insert({ nome, email, senha: encryptedPassword }).into('usuarios');

        if (users.rowCount === 0) {
            return res.status(400).json("O usuário não foi cadastrado.");
        }

        return res.status(201).json({ mensagem: "O usuario foi cadastrado com sucesso!" });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
}

module.exports = registerUser;