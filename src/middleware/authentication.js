const jwt = require('jsonwebtoken');
const knex = require('../database/connection');

const verifyLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization === 'Bearer') {
        return res.status(401).json({ mensagem: 'Usuário não autorizado.' })
    }

    const token = authorization.split(' ')[1];

    try {

        const { id } = jwt.verify(token, process.env.PASSHASH);

        const user = await knex('usuarios').where({ id });

        const { senha: _, ...loggedUser } = user[0];

        req.user = loggedUser;

        next();
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
};

module.exports = verifyLogin;