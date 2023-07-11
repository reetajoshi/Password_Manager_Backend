import Router from 'koa-joi-router';
import { healthCheck } from '../controllers';
import { handleError } from '../middleware';

const router = Router();

router.route({
  method: 'GET',
  path: '/.well-known/healthcheck.json',
  handler: [handleError, healthCheck]
});

export default router;
