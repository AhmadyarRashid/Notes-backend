import { Application } from "express";
const expressJSDocSwagger = require('express-jsdoc-swagger');

module.exports = (app: Application) => {
  const options = {
    info: {
      version: '1.0.0',
      title: 'Notes Backend',
      license: {
        name: 'MIT',
      },
    },
    security: {
      BasicAuth: {
        type: 'http',
        scheme: 'basic',
      },
    },
    baseDir: __dirname,
    filesPattern: './**/*.ts',
    swaggerUIPath: '/api-docs',
    exposeSwaggerUI: true,
    apiDocsPath: '/v1/api-docs',
    exposeApiDocs: false,
    notRequiredAsNullable: false,
    swaggerUiOptions: {},
    multiple: true,
  };
  expressJSDocSwagger(app)(options);
}
