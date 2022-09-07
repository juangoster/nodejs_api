const {faker} = require('@faker-js/faker');

class CategoriesService {

    constructor (){
        this.categories = []; 
        this.generate();
    }

    generate(){
        const limit = 50;
        for (let index = 0; index < limit; index++) {
            this.categories.push({
                id: index,
                name: faker.commerce.department(),
                description: faker.commerce.productAdjective()
            });
            
        }
    }
    create(){

    }
    update(){

    }
    find(){
        return this.categories;
    }
    findOne(id){
        return this.categories.find(item => item.id == id)
    }
    delete(){

    }
}

module.exports = CategoriesService;