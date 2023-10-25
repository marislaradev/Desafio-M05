const knex = require('../../database/connection');

    const listOrder = async (req, res) => {
        const { cliente_id } = req.query;
    
        try {
            const query = knex('pedidos as p')
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
                query.where('p.cliente_id', cliente_id);
            }
    
            const orders = await query;
    
            const ordersWithTotalValue = orders.map(order => ({
                pedido_id: order.pedido_id,
                cliente_id: order.cliente_id,
                observacao: order.observacao,
                valor_total: order.quantidade_produto * order.valor_produto,
                pedido_produto_id: order.pedido_produto_id,
                produto_id: order.produto_id,
                quantidade_produto: order.quantidade_produto,
                valor_produto: order.valor_produto,
                produto_descricao: order.produto_descricao,
            }));
    
            return res.status(200).json(ordersWithTotalValue);
        } catch (error) {
            return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
        }
    };
    
    module.exports = listOrder;