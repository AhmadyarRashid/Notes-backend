const express = require('express');
const winston = require("./config/winston");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
winston.info(`Error occurred while doing initial configuration`);

app.get('/', (req: any, res: any) => {
  winston.debug(`Error occurred while doing initial configuration`);
  return res.status(200).send({
    message: 'hello world'
  })
})

app.listen(port, (): void => {
  console.log(`Connected successfully on port ${port}`);
});
