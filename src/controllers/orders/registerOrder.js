const knex = require('../../database/connection');

const registerOrder = async (req, res) => {
    const { cliente_id, observacao, pedido_produtos } = req.body;

    try {

        const verifyClienteId = await knex('clientes').where({ id: cliente_id });
        console.log(verifyClienteId)
        if (!verifyClienteId.length) {
            return res.status(404).json({ mensagem: 'O servidor não pode encontrar o cliente.' }); // melhorar msg de erro?
        }

        if (!pedido_produtos) {
            return res.status(404).json({ mensagem: 'Sem produtos.' }); // melhorar msg de erro?
        }

        const productsIdList = pedido_produtos.map(item => item.produto_id.toString());
        const productsIdArray = productsIdList.map(Number);

        const productIdDB = await knex('produtos').pluck('id')
        console.log(productIdDB)

        console.log(productsIdArray)

        const itemEhValido = productsIdArray.every(item => productIdDB.includes(item))

        if (!itemEhValido) {
            return res.status(404).json({ mensagem: 'Id do produto inválido.' });
        }

        const productQuantity = pedido_produtos.map(item => item.quantidade_produto.toString());

        const productsQuantityArray = productQuantity.map(Number);

        const productQuantityDB = await knex('produtos').pluck('quantidade_estoque')
        console.log(productsQuantityArray)

        console.log(productQuantityDB)



        return res.status(200).json()

    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }

}
module.exports = registerOrder;