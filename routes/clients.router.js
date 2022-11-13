const express = require('express');
const ClientsService = require('../services/clients.service')
const service = new ClientsService()
const router = express.Router();
const validatorHandler = require('../middlewares/validatorHandler');
const { createClientSchema, getClientSchema, updateClientSchema } = require('../schemas/client.schema')


router.get('/', 
async (req, res, next)=>{
    try {
        const clients =  await service.getAll();    
        res.json(clients)
    } catch (error) {
        next(error);
    }
})

router.get('/:id', 
validatorHandler(getClientSchema, 'params'),
async (req, res, next)=>{
    try {
        const {id} = req.params;
        const clients = await service.getOne(id);    
        res.json(clients)
    } catch (error) {
        next(error);
    }
})

router.delete('/:id', 
validatorHandler(getClientSchema, 'params'),
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
validatorHandler(getClientSchema, 'params'), 
validatorHandler(updateClientSchema, 'body'),
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

router.post('/', 
validatorHandler(createClientSchema, 'body'),
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