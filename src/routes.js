const express = require('express');
const listCategories = require('./controllers/listCategories');
const registerUser = require('./controllers/registerUser');
const login = require('./controllers/login')
const detailUser = require('./controllers/detailUser');
const updateUser = require('./controllers/updateUser');
const verifyLogin = require('./middleware/authentication');
const validateRequestBody = require('./middleware/validateRequestBody');
const schemaLogin = require('./schemas/schemaLogin');
const schemaUser = require('./schemas/schemaUser');
const deleteProduct = require('./controllers/deleteProduct');
const registerNewClient = require('./controllers/registerNewClient');
const schemaNewClient = require('./schemas/schemaNewClient');
const schemaProduct = require('./schemas/schemaProduct');
const registerProduct = require('./controllers/registerProduct');

const routes = express();

routes.get('/categoria', listCategories);

routes.post('/usuario', validateRequestBody(schemaUser), registerUser);
routes.post('/login', validateRequestBody(schemaLogin), login);

routes.use(verifyLogin);

routes.get('/usuario', detailUser);
routes.put('/usuario', validateRequestBody(schemaUser), updateUser);

routes.post('/cliente', validateRequestBody(schemaNewClient), registerNewClient);

routes.post('/produto', validateRequestBody(schemaProduct), registerProduct); 

routes.delete('/produto/:id', deleteProduct);

module.exports = routes;