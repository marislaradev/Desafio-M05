const joi = require('joi');

const schemaLogin = joi.object({
    email: joi.string().email().required().messages({
        'string.email': 'O email precisa ter um formato válido',
        'any.required': 'O email é obrigatório',
        'string.empty': 'O email é obrigatório'
    }),
    senha: joi.string().required().messages({
        'any.required': 'A senha é obrigatória'
    }),
})

module.exports = schemaLogin;