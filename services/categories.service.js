const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

class CategoriesService {

    constructor (){
        this.categories = []; 
        this.generate();
    }

    async generate(){
        const limit = 50;
        for (let index = 0; index < limit; index++) {
            this.categories.push({
                id: index,
                name: faker.commerce.department(),
                description: faker.commerce.productAdjective()
            });
            
        }
    }
 //---------------------------------------------------------------------------

    async create(data){
        const newCategory = {
            id: 999,
            ...data
        }
        return newCategory
    }
    async update(id, data){
        const index = this.categories.findIndex(item => item.id == id);
        const updated = this.categories[index];
        const category = this.categories.find(item => item.id == id);
        if (!category){
            throw boom.notFound('categoria no encontrada')
        }
        updated = {data};
        return updated;
    }
    async updatePartial(id, data){
        const index = this.categories.findIndex(item => item.id == id);
        const updated = this.categories[index];
        const category = this.categories.find(item => item.id == id);
        if (!category){
            throw boom.notFound('categoria no encontrada')
        }
        this.categories[index] = {
            ...updated,
            ...data
        }
        return this.categories[index]
    }
    async getAll(){
        return this.categories;
    }
    async getOne(id){
        const category = this.categories.find(item => item.id == id);
        if (!category){
            throw boom.notFound('categoria no encontrada')
        }
        return this.categories.find(item => item.id == id)
    }
    async delete(id){
        const index = this.categories.findIndex(item => item.id == id)
        const category = this.categories.find(item => item.id == id);
        if (!category){
            throw boom.notFound('categoria no encontrada')
        }
        this.categories.splice(index,1);
        return {message: 'categoria eliminada'}

    }
}

module.exports = CategoriesService;