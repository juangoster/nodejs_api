const express = require('express');
const {faker} = require('@faker-js/faker')
const router = express.Router();

router.get('/', (req, res)=>{
    const {limit} = req.query;
    const users = [];
        for (let index = 0; index < limit; index++) {
            users.push({
                id: index,
                name: faker.name.fullName(),
                city: faker.address.city(),
                gender: faker.name.gender(),
                title: faker.name.jobTitle(),
                avatar: faker.image.avatar()
    
            })
            
        }
    
    res.json(users)

})


module.exports = router