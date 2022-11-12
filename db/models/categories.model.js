const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../libs/sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
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
    }
}

class Category extends Model {
    static associate (){
        // associate
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Product',
            timeStamps: false
        }
    }
}

module.exports = {Category, CATEGORY_TABLE, CategorySchema}