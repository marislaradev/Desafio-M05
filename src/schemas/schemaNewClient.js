const joi = require('joi');

const schemaNewClient = joi.object({
    nome: joi.string()
        .required()
        .trim()
        .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
        .min(3)
        .max(100)
        .messages({
            'string.empty': 'Campo nome não pode estar vazio.',
            'any.required': 'Campo nome é obrigatório.',
            'string.pattern.base': 'Campo nome deve conter apenas letras e espaços.',
            'string.min': 'Campo nome deve ter pelo menos {#limit} caracteres.',
            'string.max': 'Campo nome não pode ter mais de {#limit} caracteres.'
        }),
    email: joi.string()
        .trim()
        .email()
        .required()
        .messages({
            'string.empty': 'Campo email é obrigatório.',
            'any.required': 'Campo email é obrigatório.',
            'string.email': 'O email precisa ter um formato válido.'
        }),
    cpf: joi.string()
        .required()
        .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
        .messages({
            'string.empty': 'Campo CPF é obrigatório.',
            'any.required': 'Campo CPF é obrigatório.',
            'string.pattern.base': 'Campo CPF deve estar no formato 123.456.789-09'
        }),
    cep: joi.string()
        .regex(/^\d{5}-\d{3}$/)
        .messages({
            'string.empty': 'Campo CEP deve estar no formato 12345-678',
            'string.pattern.base': 'Campo CEP deve estar no formato 12345-678'
        }),
    rua: joi.string()
        .max(255)
        .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
        .messages({
            'string.empty': 'Campo rua deve conter apenas letras e espaços.',
            'string.max': 'Campo rua não pode ter mais de {#limit} caracteres.',
            'string.pattern.base': 'Campo rua deve conter apenas letras e espaços.'
        }),
    numero: joi.number()
        .integer()
        .messages({
            'string.empty': 'Campo número da casa deve ser um número inteiro.',
            'number.base': 'Campo número da casa deve ser um número inteiro.'
        }),
    bairro: joi.string()
        .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
        .max(255)
        .messages({
            'string.empty': 'Campo número da casa deve ser um número inteiro.',
            'string.pattern.base': 'Campo bairro deve conter apenas letras e espaços.',
            'string.max': 'Campo bairro não pode ter mais de {#limit} caracteres.'
        }),
    cidade: joi.string()
        .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
        .max(255)
        .messages({
            'string.empty': 'Campo número da casa deve ser um número inteiro.',
            'string.pattern.base': 'Campo cidade deve conter apenas letras e espaços.',
            'string.max': 'Campo cidade não pode ter mais de {#limit} caracteres.'
        }),
    estado: joi.string()
        .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/)
        .min(2)
        .max(100)
        .messages({
            'string.empty': 'Campo número da casa deve ser um número inteiro.',
            'string.pattern.base': 'Campo estado deve conter apenas letras e espaços.',
            'string.min': 'Campo estado deve ter pelo menos {#limit} caracteres.',
            'string.max': 'Campo estado não pode ter mais de {#limit} caracteres.'
        }),
});

module.exports = schemaNewClient;