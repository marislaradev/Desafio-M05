const knex = require('../../database/connection');

const detailClient = async (req, res) => {
    const customerId = req.params.id;

    try {
        const integerClientId = parseInt(customerId);

        if (!Number.isInteger(integerClientId)) {
            return res.status(400).json({ mensagem: 'ID de cliente inválido.' });
        }

        const client = await knex('clientes')
            .where('id', integerClientId)
            .first();

        if (!client) {
            return res.status(404).json({ mensagem: 'Cliente não encontrado.' });
        }

        return res.status(200).json(client);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = detailClient;





