const {User, UserSchema} = require('./user.model');
const {Category, CategorySchema} = require('./categories.model');
const {Client, ClientSchema} = require('./clients.model');
const {Product, ProductSchema} = require('./product.model');

function setupModels (sequelize){
    User.init(UserSchema, User.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    Client.init(ClientSchema, Client.config(sequelize));
}

module.exports = setupModels;