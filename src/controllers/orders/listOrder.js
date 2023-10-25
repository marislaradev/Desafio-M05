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
                const pedidoProdutos = await knex('pedido_produtos').select('*');
                return res.status(200).json(pedidoProdutos);
            }

            const orders = await query;

            const formattedOrders = [];
            let currentOrder = null;

            for (const order of orders) {
                if (!currentOrder || currentOrder.pedido_id !== order.pedido_id) {
                    currentOrder = {
                        pedido: {
                            id: order.pedido_id,
                            valor_total: 0,
                            observacao: order.observacao,
                            cliente_id: order.cliente_id,
                        },
                        pedido_produtos: [],
                    };
                    formattedOrders.push(currentOrder);
                }

                currentOrder.pedido_produtos.push({
                    id: order.pedido_produto_id,
                    quantidade_produto: order.quantidade_produto,
                    valor_produto: order.valor_produto,
                    pedido_id: order.pedido_id,
                    produto_id: order.produto_id,
                });

                currentOrder.pedido.valor_total += order.quantidade_produto * order.valor_produto;
            }

            return res.status(200).json(formattedOrders);
        } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
}

module.exports = listOrder;
