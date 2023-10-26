const knex = require('../../database/connection');
const transport = require('../email');

const registerOrder = async (req, res) => {
    const { cliente_id, observacao, pedido_produtos } = req.body;

    try {
        const verifyClienteId = await knex('clientes').where({ id: cliente_id });

        if (!verifyClienteId.length) {
            return res.status(404).json({ mensagem: 'O servidor não pode encontrar o cliente.' });
        }

        if (pedido_produtos.length === 0) {
            return res.status(404).json({ mensagem: 'Não há produtos no pedido.' });
        }
        let valor_total = 0
        for (const produto of pedido_produtos) {
            const verifyProduct = await knex('produtos').where({ id: produto.produto_id }).first();

            if (!verifyProduct) {
                return res.status(404).json({ mensagem: `O id ${produto.produto_id} do produto está incorreto.` })
            }

            if (verifyProduct.quantidade_estoque < produto.quantidade_produto) {
                return res.status(404).json({ mensagem: `Quantidade pedida do produto com id ${produto.produto_id} excede o estoque.` })
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

        let valor_em_real = Number(valor_total / 100);

        const cliente = verifyClienteId[0];
        transport.sendMail({
            from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
            to: `${cliente.nome} <${cliente.email}>`,
            subject: "Pedido confirmado! ✔",
            text: `
            Prezado(a) ${cliente.nome},
        
            seu pedido foi confirmado.                   
        
            * valor total: ${valor_formatado = "R$ " + valor_em_real.toFixed(2).replace(".", ",")}
        
            Você pode rastrear seu pedido visitando nosso site ou aplicativo.
        
            Obrigado por sua compra!
          `,
            html: `
                    
            <h1>Olá, ${cliente.nome}</h1>
        
            <p>Seu pedido foi confirmado.</p>        
                    
            <ul>
              <li>valor total: ${valor_formatado = "R$ " + valor_em_real.toFixed(2).replace(".", ",")}</li>
              
            </ul>
        
            <p>Você pode rastrear seu pedido visitando nosso site ou aplicativo.</p>
        
            <p>Obrigado por sua compra!</p>
          `,
        })

        return res.status(200).json(pedidos)
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }

}
module.exports = registerOrder;
