const Joi = require('joi');

const validateUser = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    age: Joi.number().integer().required(),
    city: Joi.string().required(),
    zipCode: Joi.string().required(),
  });
  return schema.validate(data);
};

const validateUserId = (data) => {
  const schema = Joi.object({
    userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  });
  return schema.validate(data);
};

module.exports = {
  validateUser,
  validateUserId,
};
