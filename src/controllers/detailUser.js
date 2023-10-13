const knex = require('../database/connection');

const detailUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await knex('usuarios')
      .where({ id: userId })
      .select('id', 'nome', 'email')
      .first();

        if (!user) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
        }

        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = detailUser;