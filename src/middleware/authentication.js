const jwt = require('jsonwebtoken');
const knex = require('../database/connection');

const verifyLogin = async (request, response, next) => {
    const { authorization } = request.headers;

    const token = authorization.split(' ')[1];

    try {
        if (authorization === 'Bearer') {
            return response.status(401).json({ mensagem: 'Usuário não autenticado' });
        };

        const { id } = jwt.verify(token, process.env.PASSHASH);

        const user = await knex('usuarios').where({ id }).first();

        const { senha: _, ...loggedUser } = user;

        request.user = loggedUser;


        next();
    } catch (error) {
        return response.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = verifyLogin;