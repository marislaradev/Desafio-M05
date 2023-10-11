const express = require('express');
const listCategories = require('./controllers/listCategories');
const verifyLogin = require('./middleware/authentication');

const routes = express();

routes.get('/categoria', listCategories);

//routes.post('/usuario',);
//routes.post('/login',);

routes.use(verifyLogin);

//routes.get('/usuario',);
//routes.put('/usuario',);

routes.get('/', (request, response) => {
    return response.status(200).json('Testando!')
});

module.exports = routes;