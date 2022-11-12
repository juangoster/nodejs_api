const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3);
const phone = Joi.number().integer().min(5);
const address = Joi.string().min(3);
const city = Joi.string().min(3);
const gender = Joi.string().min(3);
const image = Joi.string().uri();


const createClientSchema = Joi.object({
    name: name.required(),
    phone: phone.required(),
    address: address,
    city: city.required(),
    gender: gender.required(),
    image: image
})


const updateClientSchema = Joi.object({
    name: name,
    phone: phone,
    address: address,
    city: city,
    gender: gender,
    image: image
})


const getClientSchema = Joi.object({
    id: id.required()
})

const deleteClientSchema = Joi.object({
    id: id.required()
})

module.exports = {createClientSchema, updateClientSchema, getClientSchema, deleteClientSchema}