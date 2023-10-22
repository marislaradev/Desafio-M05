const knex = require('../database/connection')

const listClients = async (req, res) => {
    try {
        const list = await knex('clientes');

        return res.status(200).json(list);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = listClients;

