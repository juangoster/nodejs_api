const express = require('express');
const router = express.Router();
const productRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const clientsRouter = require('./clients.router');

function routerApi (app){
    app.use('/api/v1', router)//path global para el versionamiento de la api
    router.use('/products', productRouter);
    router.use('/categories', categoriesRouter);
    router.use('/users', usersRouter);
    router.use('/clients', clientsRouter);
}

module.exports = routerApi;