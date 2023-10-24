const knex = require('../../database/connection');

const registerOrder = async (req, res) => {
    const { cliente_id, observacao, pedido_produtos } = req.body;

    try {
        const verifyClienteId = await knex('clientes').where({ id: cliente_id });
        // console.log(verifyClienteId)
        if (!verifyClienteId.length) {
            return res.status(404).json({ mensagem: 'O servidor não pode encontrar o cliente.' }); // melhorar msg de erro?
        }
        // array vazio
        if (!pedido_produtos) {
            return res.status(400).json({ mensagem: 'Sem produtos.' }); // melhorar msg de erro?
        }

        for (const produto of pedido_produtos) {
            const verifyProduct = await knex('produtos').where({ id: produto.produto_id }).first();
            console.log(verifyProduct)
            if (!verifyProduct) {
                return res.status(404).json({ mensagem: `id errado ${produto.produto_id}` })
            }

            if (verifyProduct.quantidade_estoque < produto.quantidade_produto) {
                return res.status(404).json({ mensagem: `quantidade do produto com id ${produto.produto_id} excede o estoque` })
            }



        }


        // const productsIdList = pedido_produtos.map(item => item.produto_id.toString());
        // const productsIdArray = productsIdList.map(Number); //ver separação

        // const productIdDB = await knex('produtos').pluck('id')
        // console.log(productIdDB)

        // console.log(productsIdArray)

        // const itemEhValido = productsIdArray.every(item => productIdDB.includes(item))

        // if (!itemEhValido) {
        //     return res.status(404).json({ mensagem: 'Id do produto inválido.' });
        // }

        // const productQuantity = pedido_produtos.map(item => item.quantidade_produto.toString());

        // const productsQuantityArray = productQuantity.map(Number);

        // const productQuantityDB = await knex('produtos').pluck('quantidade_estoque')
        // console.log(productsQuantityArray)

        // console.log(productQuantityDB)



        return res.status(200).json()

    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }

}
module.exports = registerOrder;