const jwt = require('jsonwebtoken');
const knex = '';

const verifyLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    const token = authorization.split(' ')[1];

    try {
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
}

module.exports = verifyLogin;