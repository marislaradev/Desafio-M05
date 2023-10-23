const knex = require('../../database/connection');

const detailProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const integerProductId = parseInt(productId);

        if (!Number.isInteger(integerProductId)) {
            return res.status(400).json({ mensagem: 'ID do produto inválido' });
        }

        const product = await knex('produtos')
            .where('id', integerProductId)
            .first();

        if (!product) {
            return res.status(404).json({ mensagem: 'Produto não encontrado.' });
        }

        return res.status(200).json(product);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = detailProduct;