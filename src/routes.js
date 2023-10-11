const express = require('express');
const { listCategories } = require('./controllers/listCategories')

const routes = express();

routes.get('/',);

routes.get('/categoria', listCategories)

module.exports = routes;