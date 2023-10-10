const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DBHOST,
        port: process.env.DBPORT,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DATABASE
    }
});

module.export = knex
