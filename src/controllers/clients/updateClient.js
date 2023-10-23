const knex = require('../../database/connection');

const updateClient = async (req, res) => {
    const { id } = req.params;
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

    try {
        const verifyCustomerId = await knex('clientes')
            .where({ id })
            .first();

        if (!verifyCustomerId) {
            return res.status(404).json({ mensagem: 'O id informado não pertence a um cliente cadastrado' });
        }

        if (email) {
            const verifyEmailUnique = await knex('clientes')
                .where({ email })
                .whereNot({ id })
                .first();

            if (verifyEmailUnique) {
                return res.status(404).json({ mensagem: 'O email informado já pertence a outro cliente cadastrado' });
            }
        }

        if (cpf) {
            const verifyCpfUnique = await knex('clientes')
                .where({ cpf })
                .whereNot({ id })
                .first();

            if (verifyCpfUnique) {
                return res.status(404).json({ mensagem: 'O cpf informado já pertence a outro cliente cadastrado' });
            }
        }

        await knex('clientes')
            .where({ id })
            .update({
                nome,
                email,
                cpf,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                estado
            });

        return res.status(200).json({ mensagem: 'Os dados do cliente foram atualizados com sucesso!' })
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro inesperado do servidor." });
    }
}

module.exports = updateClient;