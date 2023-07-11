import { Joi } from 'koa-joi-router';

const createDataValidate = Joi.object({
  name: Joi.string().required(),
  data: Joi.string().required()
});

const updateDataValidate = Joi.object({
  name: Joi.string().default('DATA'),
  data: Joi.string().required()
});

const deleteDataValidate = Joi.object({
  name: Joi.string().required()
});


export { createDataValidate, updateDataValidate, deleteDataValidate };
