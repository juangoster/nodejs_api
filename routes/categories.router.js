const express = require('express');
const {faker} = require('@faker-js/faker');
const CategoriesService = require('../services/categories.service');
const service = new CategoriesService();
const router = express.Router();

router.get('/',(req, res)=>{
    const categories = service.find()
    res.json(categories)
})

router.get('/:id', (req, res)=>{
    const {id} = req.params
    const category = service.findOne(id);
    res.json(category)
})

module.exports = router;