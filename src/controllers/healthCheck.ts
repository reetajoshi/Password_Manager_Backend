import Koa from 'koa';
import version from '../utils/version';

export const healthCheck = (ctx: Koa.Context) => {
  const ok = true;
  const date = new Date();
  ctx.body = { ok, version, date };
};
