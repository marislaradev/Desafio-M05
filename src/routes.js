const express = require('express');

const routes = express();

routes.get('/', (req, res) => {
    return res.json('Testando!');
});

module.exports = routes;