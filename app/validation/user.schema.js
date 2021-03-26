const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        'string.base': "Name should be a type of text",
        'string.empty': "Name cannot be an empty field",
        'string.min': "Name should have a minimum length of {#limit}",
        'string.max': "Name should have a maximum lenght of {#limit}",
        'any.required': "Name is required field"
      }),
    email: Joi.string().email().required().messages({
        'string.base': "Email should be a type of text",
        'string.email': "Email must be a valid email",
        'string.empty': "Email can not be an empty field",
        'any.required': "Email is required field"
    }),
    password: Joi.string().min(6).required().messages({
        'string.base': "Password should be a type of text",
        'string.empty': "Password cannot be an empty field",
        'string.min': "Password should have a minimum length of {#limit}",
        'any.required': "Password is required field"
      })
});

module.exports = schema;