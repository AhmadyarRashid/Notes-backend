// eslint-disable-next-line jsdoc/no-missing-syntax
const express = require('express');
const winston = require("./config/winston");
const expressJSDocSwagger = require('express-jsdoc-swagger');

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

const app = express();
const port = 3000;

expressJSDocSwagger(app)(options);
require('dotenv').config();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: any, res: any) => {
  winston.debug(`Error occurred while doing initial configuration`);
  return res.status(200).send({
    message: 'hello world'
  })
})

/**
 * GET /api/v1/albums
 * @summary This is the summary of the endpoint
 * @tags Check health
 * @return {array<Song>} 200 - success response - application/json
 * @example response - 200 - success response example
 * [
 *   {
 *     "title": "Bury the light",
 *     "artist": "Casey Edwards ft. Victor Borba",
 *     "year": 2020
 *   }
 * ]
 */
app.get('/api/v1/albums', (req: any, res: any) => res.json({
  success: true,
}));

app.listen(process.env.SERVER_PORT, (): void => {
  winston.info(`Connected successfully on port ${port}`);
});
