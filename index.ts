import express, { Request, Response } from 'express';
const winston = require("./config/winston");
const expressJSDocSwagger = require('express-jsdoc-swagger');
const config = require('./config/dotenv');

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

expressJSDocSwagger(app)(options);

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * @tags Check health
 */

/**
 * GET /
 * @summary Server Health
 * @tags Check health
 * @return 200 - ok - application/json
 */
app.get('/', (req: Request, res: Response) => {
  res.send('ok')
})

/**
 * GET /api/v1/notes
 * @summary return all users notes
 * @tags Check health
 * @return 200 - success response - application/json
 */
app.get('/api/v1/getUsers', (req: any, res: any) => res.json({
  success: true,
}));

const server = app.listen(config.PORT, config.HOST, (): void => {
  winston.info(`Swagger Document available on http://${config.HOST}:${config.PORT}/api-docs`);
  winston.info(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
});

process.on('SIGTERM', () => {
  winston.info('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    winston.info('HTTP server closed')
  })
})
