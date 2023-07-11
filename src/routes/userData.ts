import Router from 'koa-joi-router';
import { handleAuthorization, handleError } from '../middleware';
import { createDataValidate, deleteDataValidate, updateDataValidate } from '../validators';
import { deleteData, getData, updateData } from '../controllers';

const router = Router();

router.route({
  method: 'GET',
  path: '/user/data/list',
  handler: [handleError, handleAuthorization, getData]
});

router.route({
  method: 'POST',
  path: '/user/data/update',
  validate: {
    type: 'json',
    body: updateDataValidate
  },
  handler: [handleError, handleAuthorization, updateData]
});

// router.route({
//   method: 'POST',
//   path: '/user/data/delete',
//   validate: {
//     type: 'json',
//     body: deleteDataValidate
//   },
//   handler: [handleError, handleAuthorization, deleteData]
// });


export default router;
