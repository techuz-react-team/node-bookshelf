const Joi = require('joi');

const schema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.base': 'Email should be type of text',
        'string.email': 'Email must be a valid email',
        'string.empty': 'Email cannot be empty field',
        'any.required': 'Email is required field'
    }),
    password: Joi.string().required().messages({
        'string.base': 'Password should be type of text',
        'string.empty': 'Password cannot be empty field',
        'any.required': 'Password is required field'
    })
});

module.exports = schema;