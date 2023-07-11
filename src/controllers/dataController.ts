import Koa from 'koa';
import { UserData } from '../models';

const getData = async (ctx: Koa.Context) => {
  const res: any = await UserData.findOne({ user: ctx.userId });
  ctx.body = res || {};
};

const updateData = async (ctx: Koa.Context) => {
  const { data, name } = ctx.request.body;

  ctx.body = await UserData.findOneAndUpdate({
    user: ctx.userId,
    name
  }, { data }, { new: true, upsert: true });
};

const deleteData = async (ctx: Koa.Context) => {
  const { name } = ctx.request.body;
  await UserData.findOneAndDelete({ user: ctx.userId, name });
  ctx.body = {
    success: 1
  };
};

export {
  getData,
  deleteData,
  updateData
};
