const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');


class ProductService {

    constructor() {
        
    }

    async create(data){
        const newProduct = await models.Product.create(data);
        return newProduct;
    }

    async getAll(){
        const response = await models.Product.findAll()
        return response;
    }

    async getOne(id){
        const product = await models.Product.findByPk(id)
        if(!product){
            throw boom.notFound('Producto no encontrado');
        }
        return product;
    }

    async delete(id){
        const product = await this.getOne(id)
        await product.destroy()
        return {message: 'product deleted'};    
    }

    async update(id, data){
        const product = await this.getOne(id);
        const response = await product.update(data);
        return response
    }
}

module.exports = ProductService;