const express = require('express');
const ProductService = require('../services/products.service');
const validatorHandler = require('../middlewares/validatorHandler');
const {createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/product.schema')
const service = new ProductService();
const router = express.Router();



router.get('/', async (req, res)=>{
    const products = await service.getAll();
    res.json(products)
})
  
router.get('/:id', async (req, res, next)=>{
  try {
    const {id} = req.params
    const product = await service.getOne(id)
    res.json(product)
  } catch (error) {
    next(error);
  }

})

router.delete('/:id', async (req, res, next)=>{
  try {
    const {id}= req.params;
    const deleted = await service.delete(id);
    res.json(deleted)
  } catch (error) {
    next(error);
  }

  
})

router.post('/', async (req, res)=>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct)
  
})

router.put('/:id', async (req, res)=>{
  const {id}= req.params;
  const body = req.body;
  const productUpdated = await service.update(id, body);
  res.json(productUpdated)

})

router.patch('/:id', async (req, res)=>{
  try {
    const {id}= req.params;
    const body = req.body;
    const productUpdated = await service.updatePartial(id, body);
    res.json(productUpdated)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
  

})



module.exports = router;