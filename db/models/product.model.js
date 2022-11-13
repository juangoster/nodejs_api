const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../libs/sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    image: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    isAvailable: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
    },
}

class Product extends Model {
    static associate (){
        // associate
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timeStamps: false
        }
    }
}

module.exports = {Product, PRODUCT_TABLE, ProductSchema}