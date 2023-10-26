const joi = require('joi');

const schemaProduct = joi.object({
    descricao: joi.string().required().messages({
        'any.required': 'A descrição é obrigatória',
        'string.empty': 'A descrição é obrigatória'
    }),
    quantidade_estoque: joi.number().integer().required().min(1).messages({
        'number.base': 'Insira um número inteiro para adicionar o produto no estoque',
        'number.integer': 'Insira um número inteiro para adicionar o produto no estoque',
        'any.required': 'Preencha a quantidade em estoque',
        'string.empty': 'Preencha a quantidade em estoque',
        'number.min': 'Não é possível inserir um produto com quantidade_estoque zerada ou negativa.'
    }),
    valor: joi.number().integer().required().min(1).messages({
        'number.base': 'Insira um número inteiro para adicionar o valor do produto',
        'number.integer': 'Insira um número inteiro para adicionar o valor do produto',
        'any.required': 'Preencha o valor do produto',
        'string.empty': 'Preencha o valor do produto',
        'number.min': 'Não é possível inserir um produto com valor zerado ou negativo.'
    }),
    categoria_id: joi.number().integer().required().messages({
        'number.base': 'Insira um número inteiro para adicionar a categoria do produto',
        'number.integer': 'Insira um número inteiro para adicionar a categoria do produto',
        'any.required': 'Preencha a categoria do produto',
        'string.empty': 'Preencha a categoria do produto'
    }),
    produto_imagem: joi.string().allow('').optional().messages({
        'string.empty': 'Inserir a URL da imagem é opcional'
    }),
});

module.exports = schemaProduct;