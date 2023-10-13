const bcrypt = require('bcrypt');
const knex = require('../database/connection');

const updateUser = async (req, res) => {
  const { nome, email, senha } = req.body;
  const userId = req.user.id;

  try {

    const verifyEmailUnique = await knex('usuarios').where({ email });

    if (verifyEmailUnique.length > 0) {
      return res.status(400).json({ mensagem: 'Email já existe' });
    }

    const encryptedPassword = await bcrypt.hash(senha, 10);

    const updateUser = await knex('usuarios')
      .where({ id: userId })
      .update({ nome, email, senha: encryptedPassword });

    if (updateUser !== 1) {
      return res.status(400).json({ mensagem: 'O Usuário não foi atualizado' });
    }

    return res.status(200).json({ mensagem: 'O Usuário foi atualizado com sucesso!' });
  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};

module.exports = updateUser;