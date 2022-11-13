const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UsersService {
    constructor (){

    }

    async create(data){
        const newUser = await models.User.create(data)           
        return newUser;
    }

    async update(id, data){
        const user = await this.getOne(id);
        const response = await user.update(data)
        return response
    }

    async getAll(){
        const res = await models.User.findAll()
        return res;
    }

    async getOne(id){
        const user = await models.User.findByPk(id);
        if (!user){
            throw boom.notFound('user not found')
        }
        return user
    }

    async delete(id){
        const user = await this.getOne(id);
        await user.destroy()
        return {message: 'user deleted'}
    }

    }
    
    module.exports = UsersService;