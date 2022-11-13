const express = require('express');
const CategoriesService = require('../services/categories.service');
const service = new CategoriesService();
const router = express.Router();
const validatorHandler = require('../middlewares/validatorHandler');
const { createCategorySchema, getCategorySchema, updateCategorySchema } = require('../schemas/category.schema')

router.get('/',
async (req, res, next)=>{
    try {
        const categories = await service.getAll()
        res.json(categories)
    } catch (error) {
        next(error)
    }

})

router.get('/:id', 
validatorHandler(getCategorySchema, 'params'),
async (req, res, next)=>{
    try {
        const {id} = req.params
        const category = await service.getOne(id);
        res.json(category)
    } catch (error) {
        next(error)
    }

})

router.post('/', 
validatorHandler(createCategorySchema, 'body'),
async (req, res, next)=>{
    try {
        const body = req.params
        const category = await service.create(body);
        res.json(category)
    } catch (error) {
        next(error)
    }

})

router.put('/:id', 
validatorHandler(getCategorySchema, 'params'),
validatorHandler(updateCategorySchema, 'body'),
async (req, res, next)=>{
    try {
        const {id} = req.params
        const body = req.params
        const category = await service.update(id, body);
        res.json(category)
    } catch (error) {
        next(error)
    }

})

router.delete('/:id',
validatorHandler(getCategorySchema, 'params'), 
async (req, res, next)=>{
    try {
        const {id} = req.params
        const category = await service.delete(id);
        res.json(category)
    } catch (error) {
        next(error)
    }

})

module.exports = router;