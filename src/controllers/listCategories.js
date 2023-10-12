const knex = require('../database/connection')

const listCategories = async (req, res) => {
    try {
        const list = await knex('categorias');
        return res.status(200).json(list);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = listCategories;