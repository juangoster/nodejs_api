const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ClientsService {
    constructor (){

    }

    async create(data){
        const newClient = models.Client.create(data);
        return newClient;

    }

    async update(id, data){
        const client = await this.getOne(id)
        const response = await client.update(data);
        return response
    }

    async getAll(){
        const response = await models.Client.findAll()
        return response
    }

    async getOne(id){
        const client = await models.Client.findByPk(id);
        if (!client){
            throw boom.notFound('Cliente no encontrado')
        }
        return client;
    }

    async delete(id){
        const client = await this.getOne(id)
        await client.destroy();
        return {message: 'cliente eliminado'}
    }

    
}
    
module.exports = ClientsService;