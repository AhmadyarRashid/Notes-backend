import { Response, Request } from "express";
import {systemService} from "../services/services.module";

export class SystemController {

    healthCheckFunction(req: Request, res: Response) {
        if(systemService.randomBusinessLogic())
        {
            res.status(200).send({})
        }
    }

    randomCheckFunction(req: Request, res: Response){
        systemService.anotherRandomBusinessLogic()
        res.status(200).send({})
    }

    createUserFunction(req: Request, res: Response){
        systemService.createUser()
        res.status(201).send({})
    }

    getUserFunctions(req: Request, res: Response){
        const userCount = systemService.getUserCount().then(

        )

    }
}