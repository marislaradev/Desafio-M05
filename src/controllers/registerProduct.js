const knex = require('../database/connection');

const registerProduct = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id  } = req.body


    try {
        const verifyCategory = await knex('categorias')
        .where({ id: categoria_id })
        .first();

        if (!verifyCategory) {
            return res.status(400).json({ mensagem: 'A categoria que foi informada não existe' })
        }

        const insertProduct = await knex('produtos')
        .insert({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id
        });

        if (insertProduct) {
            return res.status(201).json({ mensagem: 'O produto foi cadastrado com sucesso!'});
        } else {
            return res.status(400).json({ mensagem: 'O produto não foi cadastrado'});
        }
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = registerProduct;