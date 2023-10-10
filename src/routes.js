const express = require('express');
const { listCategories } = require('./controllers/listCategories')

const routes = express();

routes.get('/', (req, res) => {
    return res.json('Testando!');
});

routes.get('/categoria', listCategories)

module.exports = routes;