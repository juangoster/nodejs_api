const express = require('express');
const ProductService = require('../services/products.service')
const router = express.Router();
const productService = new ProductService();

router.get('/', (req, res)=>{
    const products = productService.find();
    res.json(products)
  })
  
router.get('/:id', (req, res)=>{
      const {id} = req.params
      const product = productService.findOne(id)
      res.json(product)
})

router.post('/', (req, res)=>{
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
  this.productService.create(body);
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

router.delete('/:id', (req, res)=>{
  const {id}= req.params;
  this.productService.delete(id);
  res.json({
    id,
    message: 'deleted',
  })
  
})

module.exports = router;