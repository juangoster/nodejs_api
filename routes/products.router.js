const express = require('express');
const ProductService = require('../services/products.service')
const service = new ProductService();
const router = express.Router();


router.get('/', (req, res)=>{
    const products = service.getAll();
    res.json(products)
})
  
router.get('/:id', (req, res)=>{
      const {id} = req.params
      const product = service.getOne(id)
      res.json(product)
})

router.delete('/:id', (req, res)=>{
  const {id}= req.params;
  const deleted = service.delete(id);
  res.json(deleted)
  
})

router.post('/', (req, res)=>{
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct)
  
})


router.put('/:id', (req, res)=>{
  const {id}= req.params;
  const body = req.body;
  const productUpdated = service.update(id, body);
  res.json(productUpdated)

})

router.patch('/:id', (req, res)=>{
  const {id}= req.params;
  const body = req.body;
  const productUpdated = service.updatePartial(id, body);
  res.json(productUpdated)

})



module.exports = router;