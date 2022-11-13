const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class CategoriesService {

    constructor (){

    }

    async create(data){
        const newCategory = await models.Category.create(data)
        return newCategory
    }
    async update(id, data){
        const category = await this.getOne(id);
        const response = await category.update(data);
        return response;
    }

    async getAll(){
        const response = models.Category.findAll();
        return response;
    }
    async getOne(id){
        const category = await models.Category.findByPk(id)
        if (!category){
            throw boom.notFound('categoria no encontrada')
        }
        return category
    }
    async delete(id){
        const category = await this.getOne(id);
        await category.destroy();
        return {message: 'categoría eliminada'}

    }
}

module.exports = CategoriesService;