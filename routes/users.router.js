const express = require('express');
const {faker} = require('@faker-js/faker')
const UsersService = require('../services/users.service')
const service = new UsersService()
const router = express.Router();


router.get('/', (req, res)=>{
    const users = service.find();    
    res.json(users)

})

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    const user = service.findOne(id);    
    res.json(user)

})


module.exports = router