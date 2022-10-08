const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3);
const price = Joi.number().integer().min(5);
const description = Joi.string().min(3);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
    name: name.required(),
    description: description.required(),
    price: price.required(),
    image: image
})


const updateProductSchema = Joi.object({
    name: name,
    price: price,
    description: description
})


const getProductSchema = Joi.object({
    id: id.required()
})

module.exports = {createProductSchema, updateProductSchema, getProductSchema}