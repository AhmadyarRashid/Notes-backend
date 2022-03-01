import express, { Request, Response, NextFunction } from 'express';
const winston = require("./config/winston");
const { createServer } = require("http");
const expressJSDocSwagger = require('express-jsdoc-swagger');
const config = require('./config/config');
const constants = require('./config/constants');

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuring the request to append a unique id.
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Expose-Headers", constants.tokenHeaderKey);
  next();
});

/**
 * @tags Check health
 */

/**
 * GET /
 * @summary check server health
 * @tags Check health
 * @return 200 - success response - application/json
 */
app.get('/', (req: Request, res: Response) => {
  res.send('ok');
});

require("./config/routes")(app);

const onError = (error: any) => {
  if (error.code === "EACCES") {
    winston.error(`Port '${config.PORT}' requires elevated privileges`);
    process.exit(1);
  } else if (error.code === "EADDRINUSE") {
    winston.error(`Port '${config.PORT}' is already in use`);
    process.exit(1);
  } else {
    throw error;
  }
};

const onListening = () => {
  winston.info(`Server started on http://${config.HOST}:${config.PORT}`);
  winston.info(
    `Swagger UI can be accessed at http://${config.HOST}:${config.PORT}/api-docs`
  );
};

// Creating server
const server = createServer(app);
server.listen(config.PORT);
server.on("error", onError);
server.on("listening", onListening);

process.on('SIGTERM', () => {
  winston.info('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    winston.info('HTTP server closed')
  })
})
