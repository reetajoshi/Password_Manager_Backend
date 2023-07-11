export default async (ctx: any, next: any): Promise<void> => {
  try {
    if (ctx.invalid) {
      ctx.status = 400;
      ctx.body = {
        status: 0,
        message: ctx.invalid?.body?.msg || 'invalid payload',
      };
      return;
    }
    await next();
  } catch (err) {
    console.log(err);
    if (ctx.status === 401) {
      ctx.body = {
        status: 0,
        message: err.message,
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 0,
        message: err.message,
      };
    }
  }
};
