const knex = require('../../database/connection');

const listOrder = async (req, res) => {
    const { cliente_id } = req.query;

    try {
        let query = knex('pedidos as p')
            .select(
                'p.id as pedido_id',
                'p.cliente_id',
                'p.observacao',
                'p.valor_total',
                'pp.id as pedido_produto_id',
                'pp.produto_id',
                'pp.quantidade_produto',
                'pp.valor_produto',
                'prod.descricao as produto_descricao'
            )
            .join('pedido_produtos as pp', 'p.id', 'pp.pedido_id')
            .join('produtos as prod', 'pp.produto_id', 'prod.id');

        if (cliente_id) {
            const clientExists = await knex('clientes').where({ id: cliente_id });
            if (clientExists.length === 0) {
                return res.status(404).json({ mensagem: 'Cliente não encontrado' });
            }
            query = query.where('p.cliente_id', cliente_id);
           } else {
        const allOrders = await query;

        const allFormattedOrders = [];

        for (const order of allOrders) {

            let existingOrder = allFormattedOrders.find((allFormattedOrders) =>
                allFormattedOrders.pedido.id === order.pedido_id
            );

            if (!existingOrder) {
                existingOrder = {
                    pedido: {
                        id: order.pedido_id,
                        valor_total: 0,
                        observacao: order.observacao,
                        cliente_id: order.cliente_id,
                    },
                    pedido_produtos: [],
                };
                allFormattedOrders.push(existingOrder);
            }

            existingOrder.pedido_produtos.push({
                id: order.pedido_produto_id,
                quantidade_produto: order.quantidade_produto,
                valor_produto: order.valor_produto,
                pedido_id: order.pedido_id,
                produto_id: order.produto_id,
            });
        }

        for (const order of allFormattedOrders) {
            let total = 0;
            for (const product of order.pedido_produtos) {
                total += product.quantidade_produto * product.valor_produto;
            }
            order.pedido.valor_total = total;
        }

        return res.status(200).json(allFormattedOrders);
        }

        const orders = await query;

        const formattedOrders = [];

        for (const order of orders) {

            let existingOrder = formattedOrders.find((formattedOrder) =>
                formattedOrder.pedido.id === order.pedido_id
            );

            if (!existingOrder) {
                existingOrder = {
                    pedido: {
                        id: order.pedido_id,
                        valor_total: 0,
                        observacao: order.observacao,
                        cliente_id: order.cliente_id,
                    },
                    pedido_produtos: [],
                };
                formattedOrders.push(existingOrder);
            }

            existingOrder.pedido_produtos.push({
                id: order.pedido_produto_id,
                quantidade_produto: order.quantidade_produto,
                valor_produto: order.valor_produto,
                pedido_id: order.pedido_id,
                produto_id: order.produto_id,
            });
        }

        for (const order of formattedOrders) {
            let total = 0;
            for (const product of order.pedido_produtos) {
                total += product.quantidade_produto * product.valor_produto;
            }
            order.pedido.valor_total = total;
        }

        return res.status(200).json(formattedOrders);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
}

module.exports = listOrder;
