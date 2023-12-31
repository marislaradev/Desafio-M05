const knex = require('../../database/connection')

const listProducts = async (req, res) => {
    const { categoria_id } = req.query;

    try {
        if (categoria_id) {
            const integerProductId = parseInt(categoria_id);

            if (!Number.isInteger(integerProductId)) {
                return res.status(400).json({ mensagem: 'A categoria_id do produto é inválida' });
            }

            const product = await knex('produtos').where('categoria_id', categoria_id);

            if (product.length === 0) {
                return res.status(400).json({ mensagem: 'Categoria_id não encontrada' })
            }

            return res.status(200).json(product);
        }

        const list = await knex('produtos');

        return res.status(200).json(list)
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = listProducts;