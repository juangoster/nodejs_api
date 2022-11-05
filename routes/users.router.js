const express = require('express');
const {faker} = require('@faker-js/faker')
const UsersService = require('../services/users.service')
const service = new UsersService()
const router = express.Router();


router.get('/', 
async (req, res, next)=>{
    try {
        const users =  await service.getAll();    
        res.json(users)
    } catch (error) {
        next(error);
    }
})

router.get('/:id', 
async (req, res, next)=>{
    try {
        const {id} = req.params;
        const user = await service.getOne(id);    
        res.json(user)
    } catch (error) {
        next(error);
    }
})

router.delete('/:id', 
async (req, res, next)=>{
    try {
        const {id} = req.params;
        const deleted = await service.delete(id);
        res.json(deleted);
    } catch (error) {
        next(error);
    }
})

router.put('/:id', 
async (req, res, next)=>{
    try {
        const {id} = req.params;
        const data = req.body;
        const updated = await service.update(id, data);
        res.json(updated);
    } catch (error) {
        next(error);
    }
})

router.patch('/:id', 
async (req, res, next)=>{
    try {
        const {id} = req.params;
        const data = req.body;
        const updated = await service.updatePartial(id, data);
        res.json(updated);
    } catch (error) {
        next(error);
    }
})

router.post('/', 
async (req, res, next)=>{
    try {
        const data = req.body;
        const created = await service.create(data);
        res.json(created);
    } catch (error) {
        next(error);
    }
})
module.exports = router