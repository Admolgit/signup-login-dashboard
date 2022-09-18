const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../.env') });
// // import .env variables
// require('dotenv-safe').config({
//   path: path.join(__dirname, '../../.env'),
//   allowEmptyValues: true,
// });

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  mongo: {
    uri: process.env.NODE_ENV === 'test' ? `${process.env.MONGO_URI_TESTS}` : `${process.env.MONGO_URI}`,
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};