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
            const allOrdersWithDetails = await knex('pedidos as p')
                .select(
                    'p.id as pedido_id',
                    'p.cliente_id',
                    'p.observacao',
                    'p.valor_total',
                    'pp.id as pedido_produto_id',
                    'pp.produto_id',
                    'pp.quantidade_produto',
                    'pp.valor_produto',
                    'prod.descricao as produto_descricao',
                    'c.nome as cliente_nome',
                    'c.email as cliente_email',
                    'c.cpf as cliente_cpf'
                )
                .join('pedido_produtos as pp', 'p.id', 'pp.pedido_id')
                .join('produtos as prod', 'pp.produto_id', 'prod.id')
                .join('clientes as c', 'p.cliente_id', 'c.id');
        
            return res.status(200).json(allOrdersWithDetails);
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
