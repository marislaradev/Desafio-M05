const knex = require('../../database/connection');
const { uploadImage } = require('../../services/services');

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

  let imageUrl = null;

  if (req.file) {
    const { originalname, mimetype, buffer } = req.file;
    const image = await uploadImage(
        `produto/${productId}/${originalname}`,
        buffer,
        mimetype
    );
    imageUrl = image.URL;
} else {
  const product = await knex('produtos').where('id', productId).first();
  if (product) {
    imageUrl = product.produto_imagem;
  }
}

  try {
    const integerProductId = parseInt(productId);

    if (!Number.isInteger(integerProductId)) {
      return res.status(400).json({ mensagem: 'ID do produto inválido' });
    }

    const product = await knex('produtos').where('id', productId).first();

    if (!product) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    const category = await knex('categorias').where('id', categoria_id).first();

    if (!category) {
      return res.status(400).json({ mensagem: 'Categoria não encontrada' });
    }

    await knex('produtos')
      .where('id', productId)
      .update({ descricao, quantidade_estoque, valor, categoria_id, produto_imagem: imageUrl });

    return res.status(200).json({ mensagem: 'Produto atualizado com sucesso' });

  } catch (error) {
    return res.status(500).json({ mensagem: "Erro inesperado do servidor" });
  }
};

module.exports = updateProduct;
