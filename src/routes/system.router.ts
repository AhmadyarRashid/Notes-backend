//express imports
import express = require('express');
import {systemController} from "../controllers/controllers.module";
export const routerTemplate = express.Router();

//controllers


// Set the common part of the path for the routes in this router
const base = '/system'

//Routes
routerTemplate.get(`${base}`, (req, res) => {
     systemController.healthCheckFunction(req, res)
})

routerTemplate.get(`${base}/crash`,(req, res) => {
    systemController.randomCheckFunction(req,res)
})

routerTemplate.get(`${base}/user`, (req, res) => {
    systemController.getUserFunctions(req,res)
})