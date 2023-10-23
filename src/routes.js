const express = require('express');
const listCategories = require('./controllers/listCategories');
const validateRequestBody = require('./middleware/validateRequestBody');
const schemaUser = require('./schemas/schemaUser');
const registerUser = require('./controllers/users/registerUser');

const schemaLogin = require('./schemas/schemaLogin');
const login = require('./controllers/users/login')
const verifyLogin = require('./middleware/authentication');

const detailUser = require('./controllers/users/detailUser');
const updateUser = require('./controllers/users/updateUser');

const schemaProduct = require('./schemas/schemaProduct');
const registerProduct = require('./controllers/products/registerProduct');
const updateProduct = require('./controllers/products/updateProduct');
const listProducts = require('./controllers/products/listProducts');
const detailProduct = require('./controllers/products/detailProduct');
const deleteProduct = require('./controllers/products/deleteProduct');

const schemaNewClient = require('./schemas/schemaNewClient');
const registerNewClient = require('./controllers/clients/registerNewClient');
const updateClient = require('./controllers/clients/updateClient');
const listClients = require('./controllers/clients/listClients');
const detailClient = require('./controllers/clients/detailClient');

const routes = express();

routes.get('/categoria', listCategories);

routes.post('/usuario', validateRequestBody(schemaUser), registerUser);
routes.post('/login', validateRequestBody(schemaLogin), login);

routes.use(verifyLogin);

routes.get('/usuario', detailUser);
routes.put('/usuario', validateRequestBody(schemaUser), updateUser);

routes.post('/produto', validateRequestBody(schemaProduct), registerProduct);
routes.put('/produto/:id', validateRequestBody(schemaProduct), updateProduct);
routes.get('produtos', listProducts);
routes.get('/produto/:id', detailProduct);
routes.delete('/produto/:id', deleteProduct);

routes.post('/cliente', validateRequestBody(schemaNewClient), registerNewClient);
routes.put('/cliente/:id', validateRequestBody(schemaNewClient), updateClient);
routes.get('/cliente', listClients);
routes.get('/cliente/:id', detailClient);

module.exports = routes;
