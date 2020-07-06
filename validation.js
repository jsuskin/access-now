const Joi = require("@hapi/joi");

// Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.optional(),
    lastName: Joi.optional(),
    username: Joi.string().min(6).required(),
    pronouns: Joi.optional(),
    address: Joi.optional(),
    phoneNumber: Joi.optional(),
    email: Joi.string().min(6).required().email(), // checks if valid email
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = {
    email: Joi.string().min(6).require().email(), // checks if valid email
    password: Joi.string().min(6).required(),
  };
  // return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
