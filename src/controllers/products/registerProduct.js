const knex = require('../../database/connection');
const { uploadImage } = require('../../services/services');

const registerProduct = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id  } = req.body
    
    let imageUrl = null;

    try {
        const verifyCategory = await knex('categorias')
        .where({ id: categoria_id })
        .first();

        if (!verifyCategory) {
            return res.status(400).json({ mensagem: 'A categoria informada não existe' });
        }

        if (quantidade_estoque <= 0 || valor <= 0) {
            return res.status(400).json({ mensagem: 'A quantidade de estoque e o valor não podem ser zerados ou negativos'});
        }

        let product = await knex('produtos')
        .insert({
            descricao,
            quantidade_estoque,
            valor,
            categoria_id,
            produto_imagem: imageUrl,
        }).returning('*');

        if (!product || !product[0]) {
            return res.status(201).json({ mensagem: 'O produto não foi cadastrado'});
        }

        const id = product[0].id;

        if (req.file) {
            const { originalname, mimetype, buffer } = req.file;
            const image = await uploadImage(
                `produto/${id}/${originalname}`,
                buffer,
                mimetype
            );
            imageUrl = image.URL;
        }
    
        product = await knex('produtos')
        .update({
            produto_imagem: imageUrl
        }).where({ id })
        .returning('*');

        const response = {
            descricao: product[0].descricao,
            quantidade_estoque: product[0].quantidade_estoque,
            valor: product[0].valor,
            categoria_id: product[0].categoria_id,
            produto_imagem: product[0].produto_imagem,
        };

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = registerProduct;
