const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UsersService {
    constructor (){
        this.users = [];
    }

    async create(data){
        const newUser = {
            id: 999,
            ...data
        }
        this.users.push(newUser)
        return newUser;
    }

    async update(id, data){
        const user = this.users.find(item => item.id == id);
        const index = this.users.findIndex(item => item.id == id);
        if (!user){
            throw boom.notFound('user not found')
        }
        this.users[index] = data;
        return this.users[index];
    }

    async updatePartial(id, data){
        const user = this.users.find(item => item.id == id);
        const index = this.users.findIndex(item => item.id == id);
        if (!user){
            throw boom.notFound('user not found')
        }
        const usuario = this.users[index]
        this.users[index] = {
            ...usuario,
            ...data
        };
        return this.users[index];
    }

    async getAll(){
        const res = await models.User.findAll()
        return res;
    }

    async getOne(id){
        const user = this.users.find(item => item.id == id);
        const index = this.users.findIndex(item => item.id == id);

        if (!user){
            throw boom.notFound('usuario no encontrado')
        }
        return this.users[index]
    }

    async delete(id){
        const user = this.users.find(item => item.id == id);
        const index = this.users.findIndex(item => item.id == id);
        if(!user){
            throw boom.notFound('usuario no encontrado')
        } 
        this.users.splice(index,1);
        return {message: 'user deleted'}
    }

    }
    
    module.exports = UsersService;