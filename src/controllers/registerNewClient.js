const bcrypt = require('bcrypt');
const knex = require('../database/connection');

const registerNewClient = async (req, res) => {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

    //espaço em branco
    if (!nome || !email || !cpf) {
        return res.status(400).json({ mensagem: 'Os campos nome, email e senha são obrigatórios.' }); //duvida: é melhor por separado?
    }

    try {
        const verifyEmailUnique = await knex('clientes').where({ email });

        if (verifyEmailUnique.length > 0) {
            return res.status(400).json({ mensagem: 'Email já existe.' });
        }

        const verifyCpfUnique = await knex('clientes').where({ cpf });

        if (verifyCpfUnique.length > 0) {
            return res.status(400).json({ mensagem: 'Cpf já existe.' });
        } //duvida: pode juntar com email

        const client = await knex.insert({ nome, email, cpf, cep, rua, numero, bairro, cidade, estado }).into('clientes');

        return res.status(201).json({ mensagem: "O cliente foi cadastrado com sucesso!" });
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = registerNewClient;