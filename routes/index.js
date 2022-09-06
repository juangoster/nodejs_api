const productRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');

function routerApi (app){
    app.use('/products', productRouter);
    app.use('/categories', categoriesRouter);
    app.use('/users', usersRouter);
}

module.exports = routerApi;