import { verifyJwtToken } from '../utils/auth';
import Koa from 'koa';

export default async (ctx: Koa.Context, next: Koa.Next): Promise<void> => {
  const token = ctx.request.get('authorization').replace(/Bearer /, '');
  try {
    const user: any = verifyJwtToken(token);
    ctx.user = user;
    ctx.userId = user._id;
  } catch (e) {
    ctx.throw('Unauthorized', 401);
  }
  await next();
};
