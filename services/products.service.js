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
    find(){
        return this.products;
    }
    findOne(id){
        return this.products.find(item => item.id == id);
        
    }
    delete(id){
        this.products.splice(id,1);
    }
    update(id){
        
    }
}

module.exports = ProductService;