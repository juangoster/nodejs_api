const express = require('express');
const {faker} = require('@faker-js/faker')
const router = express.Router();

router.get('/', (req, res)=>{
    const products = [];
    const {cuantos} = req.query // esto son los query params, de acá se setea lo que uno quiere como parametros en el endpoint para filtrar
    for (let index = 0; index < cuantos; index++) {
      products.push({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      }) 
    }
    res.json(products)
  })

router.get('/filter', (req, res)=>{
    res.send('hola soy el filter')
})
  
router.get('/:id', (req, res)=>{
      const {id} = req.params
      res.json({
          id,
          name: 'nuevo producto',
          price: 0
      })
})

module.exports = router;