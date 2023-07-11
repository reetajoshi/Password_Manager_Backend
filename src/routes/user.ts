import Router from 'koa-joi-router';
import { handleError } from '../middleware';
import { login, register } from '../controllers';
import { loginValidate, registerValidate } from '../validators';

const router = Router();

router.route({
  method: 'POST',
  path: '/user/login',
  validate: {
    type: 'json',
    body: loginValidate
  },
  handler: [handleError, login]
});

router.route({
  method: 'POST',
  path: '/user/register',
  validate: {
    type: 'json',
    body: registerValidate
  },
  handler: [handleError, register]
});


export default router;
