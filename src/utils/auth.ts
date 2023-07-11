import fs from 'fs';
import jsonwebtoken from 'jsonwebtoken';

const privateKey = fs.readFileSync('./secrets/jwt.key');
const publicKey = fs.readFileSync('./secrets/jwt.key.pub');

const signJwtToken = (payload: any) => {
  return jsonwebtoken.sign(payload, privateKey, { algorithm: 'RS512', expiresIn: '365 days' });
};

const verifyJwtToken = (payload: any) => {
  return jsonwebtoken.verify(payload, publicKey);
};

export {
  signJwtToken,
  verifyJwtToken
};
