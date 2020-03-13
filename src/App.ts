import express from 'express';

//controllers
import TestControllers from "./controllers/TestControllers";
import LoggerControllers from "./controllers/LoggerControllers";
import TimeToolsController from "./controllers/TimeToolsController";
import RickLasererScissorController from "./controllers/RickLaserScissorController"
import CalculatorController from "./controllers/CalculatorController"
import TicTocController from "./controllers/TicTocController"
import TodoController from "./controllers/TodoController"
    
//middlewares
import LoggerMiddleware from "./modules/LoggerMiddleware";


class Main{

    private app
    private port = 3000
    
    constructor(){
        this.app = express()

        //statics
        this.app.use(express.static('public'))

        //middlewares
        this.initMiddlewares()

        //apis
        this.initControllers()

        this.listen()
    }

    private initMiddlewares() {
        
        LoggerMiddleware.init(this.app);
        
    }

    private initControllers(){

        TestControllers.init(this.app)
        LoggerControllers.init(this.app)
        TimeToolsController.init(this.app)
        RickLasererScissorController.init(this.app)
        CalculatorController.init(this.app)
        TicTocController.init(this.app)
        TodoController.init(this.app)
    }

    private listen(){
        this.app.listen(this.port, () => console.log(`App running on port ${this.port}`))
    }
}

new Main()