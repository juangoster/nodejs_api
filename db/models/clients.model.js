const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../libs/sequelize');

const CLIENT_TABLE = 'clients';

const ClientSchema = {
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
    phone: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    address: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    city: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    gender: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    image: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    
}

class Client extends Model {
    static associate (){
        // associate
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: CLIENT_TABLE,
            modelName: 'Client',
            timeStamps: false
        }
    }
}

module.exports = {Client, CLIENT_TABLE, ClientSchema}