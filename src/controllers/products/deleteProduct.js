const knex = require('../../database/connection');
const { deleteImage } = require('../../services/services')

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const validateOrder = await knex('pedido_produtos').where('produto_id', id);

        if (validateOrder.length > 0) {
            return res.status(400)
                .json({ mensagem: 'Produto não pode ser excluído, está vinculado a algum pedido' });
        }

        const validId = await knex('produtos')
            .where({ id });

        if (validId.length === 0) {
            return res.status(404).json({ mensagem: 'O servidor não pode encontrar o recurso solicitado.' });
        }

        const path = await knex.select('produto_imagem').from('produtos').where('id', id);

        if (path.indexOf('http') != -1) { 
            url = new URL(path)
            path = url.pathname.toString().slice(1)
        };

        await deleteImage(path);

        await knex('produtos').del().where({ id });

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = deleteProduct;
