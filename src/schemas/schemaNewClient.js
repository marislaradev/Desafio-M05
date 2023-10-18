const joi = require('joi');

const schemaNewClient = joi.object({
    nome: joi.string()
        .min(3)
        .max(100)
        .required()
        .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
        .messages({
            'any.required': 'Campo nome é obrigatório',
            'string.empty': 'Campo nome não pode estar vazio',
            'string.min': 'Campo nome deve ter pelo menos {#limit} caracteres.',
            'string.max': 'Campo nome não pode ter mais de {#limit} caracteres.',
            'string.pattern.base': 'Campo nome deve conter apenas letras e espaços.'
        }),
    email: joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'O email precisa ter um formato válido',
            'any.required': 'Campo email é obrigatório',
            'string.empty': 'Campo email é obrigatório'
        }),
    cpf: joi.string()
        .required()
        .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).messages({
            'any.required': 'Campo CPF é obrigatório',
            'string.empty': 'Campo CPF é obrigatório',
            'string.pattern.base': 'Campo CPF deve estar no formato 123.456.789-09'

        }),
    cep: joi.string()
        .regex(/^\d{5}-\d{3}$/)
        .max(9)
        .messages({
            'string.pattern.base': 'Campo CEP deve estar no formato 12345-678',
            'string.max': 'Campo CEP não pode ter mais de {#limit} caracteres.',
        }),
    rua: joi.string()
        .max(255)
        .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
        .messages({
            'string.max': 'Campo rua não pode ter mais de {#limit} caracteres.',
            'string.pattern.base': 'Campo rua deve conter apenas letras e espaços.'
        }),
    numero: joi.number()
        .integer()
        .messages({
            'number.base': 'Campo número da casa deve ser um número inteiro.'
        }),
    bairo: joi.string()
        .max(255)
        .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
        .messages({
            'string.max': 'Campo bairro não pode ter mais de {#limit} caracteres.',
            'string.pattern.base': 'Campo bairro deve conter apenas letras e espaços.'
        }),
    cidade: joi.string()
        .max(255)
        .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
        .messages({
            'string.max': 'Campo cidade não pode ter mais de {#limit} caracteres.',
            'string.pattern.base': 'Campo cidade deve conter apenas letras e espaços.'
        }),
    estado: joi.string()
        .min(2)
        .max(100).regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
        .messages({
            'string.min': 'Campo estado deve ter pelo menos {#limit} caracteres.',
            'string.max': 'Campo estado não pode ter mais de {#limit} caracteres.',
            'string.pattern.base': 'Campo estado deve conter apenas letras e espaços.'
        }),
});

module.exports = schemaNewClient;