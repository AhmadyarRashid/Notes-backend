import logger from '../config/logger';
import { Request, Response, NextFunction, } from 'express';
import rTracer from "cls-rtracer";

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    const logObject = {
        'contextID': rTracer.id(),
        'errorMessage': err.message,
        'errorStackTrace': err.stack
    }
    logger.error(logObject);
    res.status(500).send(err.message)
    next()
};
