import {createLogger, format, Logger, transports} from 'winston';

let logger: Logger;

if (process.env.NODE_ENV == 'production'){
    const httpTransportOptions = {
        host: process.env.DATADOG_LOG_HOST,
        path: '/api/v2/logs?dd-api-key='+process.env.DATADOG_API_KEY+'&ddsource=nodejs&service='+process.env.SERVICE_NAME,
        ssl: true
    };
    logger = createLogger({
        level: 'info',
        exitOnError: false,
        format: format.json(),
        transports: [
            new transports.Http(httpTransportOptions),
        ],
    });
}
else{
    logger = createLogger({
        level: 'debug',
        exitOnError: false,
        format: format.json(),
        transports: [
            new transports.Console()
        ],
    });
}

export default logger;
//todo: LogInterface Object, Serializer.