const knex = require('../database/connection');

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const validId = await knex('produtos')
            .where({ id });

        if (validId.length === 0) {
            return res.status(404).json({ mensagem: 'O servidor não pode encontrar o recurso solicitado.' });
        }
        await knex('produtos').del().where({ id });

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = deleteProduct;
