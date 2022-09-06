const express = require('express');
const {faker} = require('@faker-js/faker');
const router = express.Router();

router.get('/',(req, res)=>{
    const categories = []
    const {limit, offset} = req.query;
    for (let index = 0; index < limit; index++) {
        categories.push({
            name: faker.commerce.department(),
            description: faker.commerce.productAdjective()
        });
        
    }

    res.json(categories)
})

module.exports = router;