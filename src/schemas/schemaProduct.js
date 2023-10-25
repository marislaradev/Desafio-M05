const joi = require('joi');

const schemaProduct = joi.object({
    descricao: joi.string().required().messages({
        'any.required': 'A descrição é obrigatória',
        'string.empty': 'A descrição é obrigatória'
    }),
    quantidade_estoque: joi.number().integer().required().messages({
        'number.base': 'Insira um número inteiro para adicionar o produto no estoque',
        'number.integer': 'Insira um número inteiro para adicionar o produto no estoque',
        'any.required': 'Preencha a quantidade em estoque',
        'string.empty': 'Preencha a quantidade em estoque'
    }),
    valor: joi.number().integer().required().messages({
        'number.base': 'Insira um número inteiro para adicionar o valor do produto',
        'number.integer': 'Insira um número inteiro para adicionar o valor do produto',
        'any.required': 'Preencha o valor do produto',
        'string.empty': 'Preencha o valor do produto'
    }),
    categoria_id: joi.number().integer().required().messages({
        'number.base': 'Insira um número inteiro para adicionar a categoria do produto',
        'number.integer': 'Insira um número inteiro para adicionar a categoria do produto',
        'any.required': 'Preencha a categoria do produto',
        'string.empty': 'Preencha a categoria do produto'
    }),
    produto_imagem: joi.string().uri().allow('').optional().messages({
        'string.uri': 'Insira uma URL válida para a imagem do produto',
        'string.empty': 'Inserir a URL da imagem é opcional'
    })
});

module.exports = schemaProduct;