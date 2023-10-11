const jwt = require('jsonwebtoken');
const knex = '';

const verifyLogin = async (request, response, next) => {
    const { authorization } = request.headers;

    const token = authorization.split(' ')[1];

    try {


        next();
    } catch (error) {
        return response.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
}

module.exports = verifyLogin;