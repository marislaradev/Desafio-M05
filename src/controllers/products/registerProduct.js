const knex = require('../../database/connection');
const { uploadImage } = require('../../services/services');

const registerProduct = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id  } = req.body
    const { originalname, mimetype, buffer } = req.file;

    try {
        console.log('Iniciando o cadastro de produto...');
        const verifyCategory = await knex('categorias')
        .where({ id: categoria_id })
        .first();

        if (!verifyCategory) {
            console.log('Categoria inválida.');
            return res.status(400).json({ mensagem: 'A categoria que foi informada não existe' })
        }

        let product = await knex('produtos')
        .insert({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id
        }).returning('*');

        if (!product) {
            console.log('Erro ao inserir o produto no banco de dados.');
            return res.status(201).json({ mensagem: 'O produto não foi cadastrado'});
        }

        const id = product[0].id;

        const image = await uploadImage(
            `produto/${id}/${originalname}`,
            buffer,
            mimetype
        )
        
        product = await knex('produtos').update({
            produto_imagem: image.path
        }).where({ id }).returning('*');

        console.log('Produto cadastrado com sucesso.');

        product[0].urlImage = image.URL;

        return res.status(200).json(product[0]);
    } catch (error) {
        console.log('Erro inesperado do servidor:', error);
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = registerProduct;
