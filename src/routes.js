const express = require('express');
const listCategories = require('./controllers/listCategories');
const registerUser = require('./controllers/registerUser');
const login = require('./controllers/login')
const verifyLogin = require('./middleware/authentication');
const validateRequestBody = require('./middleware/validateRequestBody');
const schemaLogin = require('./schemas/schemaLogin');
const schemaUser = require('./schemas/schemaUser');


const routes = express();

routes.get('/categoria', listCategories);

routes.post('/usuario', validateRequestBody(schemaUser), registerUser);
routes.post('/login', validateRequestBody(schemaLogin), login);

routes.use(verifyLogin);

//routes.get('/usuario',);
//routes.put('/usuario', validateRequestBody(schemaUser), );

routes.get('/', (req, res) => {
    return res.status(200).json('Testando!')
});

module.exports = routes;