const knex = require('../database/connection')

const listCategories = async (request, response) => {
    try {
        const list = await knex('categorias');
        return response.status(200).json(list);
    } catch (error) {
        return response.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = listCategories;