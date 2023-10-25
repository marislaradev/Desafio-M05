const joi = require('joi');

const produtoSchema = joi.object({
    produto_id: joi.number()
        .integer()
        .min(1)
        .required(),
    quantidade_produto: joi.number()
        .integer()
        .min(1)
        .required()
});

const schemaRegisterOrder = joi.object({
    cliente_id: joi.number()
        .integer()
        .min(1)
        .required(),

    observacao: joi.string(),

    pedido_produtos: joi.array()
        .items(produtoSchema)
        .required(),
})
    .messages({
        'any.required': 'O campo {#label} é obrigatório',
        'number.base': 'O campo {#label} deve ser um número',
        'number.integer': 'O campo {#label} deve ser um número inteiro',
        'number.min': 'O campo {#label} deve ser no mínimo {#limit}',
        'string.base': 'O campo {#label} deve ser uma string'
    });

module.exports = schemaRegisterOrder;