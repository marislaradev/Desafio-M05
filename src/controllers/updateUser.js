const bcrypt = require('bcrypt');
const knex = require('../database/connection');

const updateUser = async (req, res) => {
  const { nome, email, senha } = req.body;
  const userId = req.user.id;

  try {
  
    const whiteSpace = (str) => {
      return str.trim() === '';
    };

    if (whiteSpace(nome) || whiteSpace(email) || whiteSpace(senha)) {
      return res.status(400).json({ mensagem: 'Um ou mais campos foram preenchidos com espaços em branco' });
    }

    const verifyEmailUnique = await knex('usuarios').where({ email }).andWhere('id', '!=', userId);

    if (verifyEmailUnique.length > 0) {
      return res.status(400).json({ mensagem: 'Email já existe' });
    }

    const encryptedPassword = await bcrypt.hash(senha, 10);

    const updateUser = await knex('usuarios')
      .where({ id: userId })
      .update({ nome, email, senha: encryptedPassword });

    if (updateUser !== 1) {
      return res.status(400).json({ mensagem: 'O usuário não foi atualizado' });
    }

    return res.status(200).json({ mensagem: 'O usuário foi atualizado com sucesso!' });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
  }
};

module.exports = updateUser;