import Koa from 'koa';
import { User } from '../models';
import bcrypt from 'bcrypt';
import { signJwtToken } from '../utils/auth';

const register = async (ctx: Koa.Context) => {
  const data = ctx.request.body;
  const userData: any = await User.findOne({ email: data.email });
  if (userData) {
    ctx.throw('Email already registered');
  }
  data.password = bcrypt.hashSync(data.password, 12);
  ctx.body = await User.create(data);
};

const login = async (ctx: Koa.Context) => {
  const { email, password } = ctx.request.body;
  const userData: any = await User.findOne({ email });
  if (!userData) {
    ctx.throw('user not found');
  }
  if (!bcrypt.compareSync(password, userData.password)) {
    ctx.throw('invalid password');
  }
  ctx.body = {
    _id: userData._id,
    email: userData.email,
    token: signJwtToken({
      _id: userData._id,
      email: userData.email
    })
  };
};


export {
  register,
  login
};
