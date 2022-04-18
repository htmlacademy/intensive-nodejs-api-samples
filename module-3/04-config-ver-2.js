import dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) {
  throw new Error(result.error);
}

const env = Object.assign({}, result.parsed);

export {
  env
};
