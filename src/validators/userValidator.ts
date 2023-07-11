import { Joi } from 'koa-joi-router';

const loginValidate = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
});

const registerValidate = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  fullName: Joi.string().required()
});

export { loginValidate, registerValidate };
