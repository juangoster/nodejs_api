const {faker} = require('@faker-js/faker');

class UsersService {
    constructor (){
        this.users = [];
        this.generateData(50);
    }
    generateData(number){
        const limit = number;
        for (let index = 0; index < limit; index++) {
            this.users.push({
                id: index,
                name: faker.name.fullName(),
                city: faker.address.city(),
                gender: faker.name.gender(),
                title: faker.name.jobTitle(),
                avatar: faker.image.avatar()
    
            })
            
        }
    }

    create(){
    
    }
    update(){
    
    }
    find(){
        return this.users;
    }
    findOne(id){
        return this.users.find(item => item.id == id)
    }
    delete(){
    
    }
    }
    
    module.exports = UsersService;