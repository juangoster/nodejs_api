const express = require('express');
const ProductService = require('../services/products.service')
const service = new ProductService();
const router = express.Router();


router.get('/', (req, res)=>{
    const products = service.find();
    res.json(products)
})
  
router.get('/:id', (req, res)=>{
      const {id} = req.params
      const product = service.findOne(id)
      res.json(product)
})

router.delete('/:id', (req, res)=>{
  const {id}= req.params;
  this.service.delete(id);
  
})

router.post('/', (req, res)=>{
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct)
  
})

router.put('/:id', (req, res)=>{
  const {id}= req.params;
  const body = req.body;
  res.json({
    id,
    message: 'updated',
    data: body
  })
})



module.exports = router;