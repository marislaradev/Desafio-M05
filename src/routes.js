const express = require('express');
const listCategories = require('./controllers/listCategories');
const registerUser = require('./controllers/registerUser');
const login = require('./controllers/login')
const verifyLogin = require('./middleware/authentication');


const routes = express();

routes.get('/categoria', listCategories);

routes.post('/usuario', verifyLogin.verifyRegisterUser, registerUser);
routes.post('/login', login);

//routes.use(verifyLogin);

//routes.get('/usuario',);
//routes.put('/usuario',);

routes.get('/', (request, response) => {
    return response.status(200).json('Testando!')
});

module.exports = routes;