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
        if (pedido_produtos.length === 0) {
            return res.status(400).json({ mensagem: 'Sem produtos.' }); // melhorar msg de erro?
        }
        let valor_total = 0
        for (const produto of pedido_produtos) {
            const verifyProduct = await knex('produtos').where({ id: produto.produto_id }).first();
            console.log(verifyProduct)
            if (!verifyProduct) {
                return res.status(404).json({ mensagem: `id errado ${produto.produto_id}` })
            }

            if (verifyProduct.quantidade_estoque < produto.quantidade_produto) {
                return res.status(404).json({ mensagem: `quantidade do produto com id ${produto.produto_id} excede o estoque` })
            }
            valor_total += verifyProduct.valor * produto.quantidade_produto
        }

        const pedidos = await knex('pedidos').insert({ cliente_id, observacao, valor_total }).returning('*');

        for (produto of pedido_produtos) {
            const verifyProduct = await knex('produtos').where({ id: produto.produto_id }).first();

            await knex('pedido_produtos').insert({ pedido_id: pedidos[0].id, produto_id: produto.produto_id, quantidade_produto: produto.quantidade_produto, valor_produto: verifyProduct.valor });

            let atualizaEstoque = verifyProduct.quantidade_estoque - produto.quantidade_produto
            await knex('produtos').update({ quantidade_estoque: atualizaEstoque }).where({ id: produto.produto_id })
        }

        return res.status(200).json(pedidos)
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }

}
module.exports = registerOrder;