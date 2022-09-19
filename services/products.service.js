const {faker} = require('@faker-js/faker')

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
                image: faker.image.imageUrl()
            }) 
        }
    }

    create(data){
        const newProduct = {
            id: 999,
            ...data
        }
        this.products.push(newProduct)
        return newProduct;
    }
    getAll(){
        return this.products;
    }
    getOne(id){

        return this.products.find(item => item.id == id);
        
    }
    delete(id){
        const index = this.products.findIndex(item => item.id == id);
        if (index ===  -1){
            throw new Error('producto no encontrado');
        }
        this.products.splice(index, 1);
        return {message: 'product deleted'};    
    }
    update(id, data){
        const index = this.products.findIndex(item => item.id == id);
        if (index ===  -1){
            throw new Error('producto no encontrado');
        }
        this.products[index] = data;
        return this.products[index];
    }
    updatePartial(id, data){
        const index = this.products.findIndex(item => item.id == id);
        if (index ===  -1){
            throw new Error('producto no encontrado');
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