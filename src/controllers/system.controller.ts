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

    createUserFunction = async (req: Request, res: Response) => {
        const insertedUser = await systemService.createUser()
        console.log(insertedUser)
        res.status(201).send({})
    }

    getUserFunctions = async (req: Request, res: Response) => {
        const userCount = await systemService.getUserCount()
        res.status(201).send(userCount)
    }
}
