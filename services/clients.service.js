const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ClientsService {
    constructor (){
        this.clients = [];
    }

    async create(data){

    }

    async update(id, data){

    }

    async updatePartial(id, data){

    }

    async getAll(){
        const response = await models.Client.findAll()
        return response
    }

    async getOne(id){

    }

    async delete(id){

    }

    
}
    
module.exports = ClientsService;