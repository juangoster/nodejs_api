const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductService {

    constructor() {
        this.products = []
        this.generate();
    }

    generate(){
        const limit = 100 // esto son los query params, de acá se setea lo que uno quiere como parametros en el endpoint para filtrar
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: index,
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
                isAvailable: faker.datatype.boolean()
            }) 
        }
    }
//---------------------------------------------------------------------------
    async create(data){
        const newProduct = {
            id: 999,
            ...data
        }
        this.products.push(newProduct)
        return newProduct;
    }
    async getAll(){
        return this.products;
    }
    async getOne(id){
        const producto = this.products.find(item => item.id == id);
        if(!producto){
            throw boom.notFound('Producto no encontrado');
        }
        if (producto.isAvailable){
            return producto;
        }
            throw boom.forbidden('El producto no se encuentra disponible')
    }
    async delete(id){
        const producto = this.products.find(item => item.id == id);
        const index = this.products.findIndex(item => item.id == id);
        if (!producto){
            throw boom.notFound('Producto no encontrado');
            
        }
        this.products.splice(index, 1);
        return {message: 'product deleted'};    
    }
    async update(id, data){
        const producto = this.products.find(item => item.id == id);
        const index = this.products.findIndex(item => item.id == id);
        if (!producto){
            throw boom.notFound('Producto no encontrado');
        }
        this.products[index] = data;
        return this.products[index];
    }
    async updatePartial(id, data){
        const product = this.products.find(item => item.id == id);
        const index = this.products.findIndex(item => item.id == id);
        if (!product){
            throw boom.notFound('Producto no encontrado');
        }
        const producto = this.products[index]
        this.products[index] = {
            ...producto,
            ...data
        };
        return this.products[index];
    }
}

module.exports = ProductService;