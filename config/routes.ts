import { Application } from "express";
const glob = require('glob');
const winston = require('./winston');
const constants = require('./constants');

module.exports = (app: Application) => {
  winston.info('Loading routes');
  const routePath = 'modules/**/*.routes.ts';
  const version = `/api/${constants.apiVersion}`;
  glob.sync(routePath).forEach((file:any) => {
    require(`../${file}`)(app, version);
    winston.info(`'${file}' is loaded`);
  });
};
