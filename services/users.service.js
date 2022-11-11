const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool')

class UsersService {
    constructor (){
        this.users = [];
        this.generateData(50);
        this.pool = pool;
        this.pool.on('error', (err) => console.error(err));
    }
    generateData(number){
        const limit = number;
        for (let index = 0; index < limit; index++) {
            this.users.push({
                id: faker.datatype.uuid(),
                name: faker.name.fullName(),
                city: faker.address.city(),
                gender: faker.name.gender(),
                title: faker.name.jobTitle(),
                avatar: faker.image.avatar()
    
            })
            
        }
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
        const query = 'SELECT * FROM users';
        const res = await this.pool.query(query)
        return res.rows;
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