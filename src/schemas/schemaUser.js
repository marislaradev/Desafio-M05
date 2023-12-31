const joi = require('joi');

const schemaUser = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O nome é obrigatório',
        'string.empty': 'O nome é obrigatório'
    }),
    email: joi.string().email().required().messages({
        'string.email': 'O email precisa ter um formato válido',
        'any.required': 'O email é obrigatório',
        'string.empty': 'O email é obrigatório'
    }),
    senha: joi.string().required().messages({
        'any.required': 'A senha é obrigatória',
        'string.empty': 'A senha é obrigatória'
    })
});

module.exports = schemaUser;