const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../database/connection');

const registerProduct = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id  } = req.body


    try {
        // const whiteSpace = (str) => {
        //     return str.trim().length === 0;
        // };
    
        // if (whiteSpace(descricao) || whiteSpace(quantidade_estoque) || whiteSpace(valor) || whiteSpace(categoria_id)) {
        //     return res.status(400).json({ mensagem: 'Um ou mais campos foram preenchidos com espaços em branco' });
        // } -> ALINE, é necessário colocar essa parte de verificar espaço em branco?

        const verifyCategory = await knex('categorias')
        .where({ id: categoria_id })
        .first();

        if (!verifyCategory) {
            return res.status(400).json({ mensagem: 'A categoria que foi informada não existe' })
        }

        const insertProduct = await knex('produtos')
        .insert({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id
        });

        if (insertProduct) {
            return res.status(201).json({ mensagem: 'O produto foi cadastrado com sucesso!'});
        } else {
            return res.status(400).json({ mensagem: 'O produto não foi cadastrado'});
        }
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = registerProduct;