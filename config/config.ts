const config = require('dotenv');

config.config({
  path: require('path').join(__dirname, '..', `${process.env.NODE_ENV}.env`),
});

module.exports = {
  NODE_ENV : process.env.NODE_ENV || 'development',
  HOST : process.env.HOST || 'localhost',
  PORT : process.env.PORT || 3000
}
