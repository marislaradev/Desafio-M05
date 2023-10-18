const joi = require('joi');

const schemaNewClient = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O nome é obrigatório',
        'string.empty': 'O nome é obrigatório',

    }),
    email: joi.string().email().required().messages({
        'string.email': 'O email precisa ter um formato válido',
        'any.required': 'O email é obrigatório',
        'string.empty': 'O email é obrigatório'
    }),
    cpf: joi.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).messages({
        'any.required': 'O CPF é obrigatório',
        'string.empty': 'O CPF é obrigatório',
        'string.pattern.base': 'O CPF deve estar no formato 123.456.789-09'

    }),
    cep: joi.string(),
    rua: joi.string(),
    numero: joi.string(),
    bairo: joi.string(),
    cidade: joi.string(),
    estado: joi.string(),
});

module.exports = schemaNewClient;