import dotenv from 'dotenv';
import {App} from "./app";
import {requestMiddleware} from "./middlewares/request.middleware";
import {errorMiddleware} from "./middlewares/error.middleware";
import { routerTemplate } from "./routes/system.router";
import './config/tracer';
import rTracer  from 'cls-rtracer';
import {initConnection} from "execfn-core/lib/data/connection";

/**
 * Configure App instance
 */

dotenv.config()
const portNumber = Number(process.env.PORT);


const app = new App(
    portNumber,
    [rTracer.expressMiddleware({useHeader:true, headerName:'X-ExecFn-Trace-Id'}), requestMiddleware],
    [routerTemplate],
    '/api/'
);

app.addMiddleWare(errorMiddleware)
/**
 * Run Express App
 */
app.listen();

// DB Conenction From
initConnection().then(r => console.log('Successful TypeORM Connection'));

process.on('SIGTERM', () => {
    app.gracefulShutdown();

})
