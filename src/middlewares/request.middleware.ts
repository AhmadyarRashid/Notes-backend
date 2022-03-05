import logger from '../config/logger';
import { Request, Response, NextFunction } from 'express';
import rTracer from "cls-rtracer";


export const requestMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const logObject = {
        'contextID': rTracer.id(),
        'method':request.method,
        'path':request.path,
        'param':request.params,
        'body':request.body
    }
    logger.http(logObject);
    next()
};