import Router from 'koa-joi-router';
import healthCheckRouter from './healthCheck';
import userRouter from './user';
import userDataRouter from './userData';

const router = Router();

router.route({
  handler: ctx => {
    ctx.body = {
      response: 'Ok'
    };
  },
  method: 'GET',
  path: '/'
});

router.use(healthCheckRouter.middleware());
router.use(userRouter.middleware());
router.use(userDataRouter.middleware());


export default router;
