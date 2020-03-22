import Todo from "./../data/model/Todo"
import TodoRepo from "../data/repo/TodoRepo"

export default class TodoController{

    private static prePath = "/todo"

    static init(app) {
        
        app.post(this.prePath + "/add", (req, res) => {
            
            if (req.body.name == undefined || req.body.description == undefined) {
                res.status(400).send("send name and description in body")
                return
            }

            let todo = Todo.getInstance(
                req.body.name,
                req.body.description
            )
            TodoRepo.add(todo)
            res.status(200).send("done")
        })

        app.post(this.prePath + "/remove", (req, res) => {

            if (req.header('todoId') == undefined) {
                res.status(400).send("set todoid in header")
                return
            }

            TodoRepo.delete(req.header('todoId'))
            res.status(200).send("done")
        })

        app.post(this.prePath + "/mark", (req, res) => {

            if (req.header('todoId') == undefined) {
                res.status(400).send("set todoid in header")
                return
            }

            TodoRepo.mark(req.header('todoId'))
            res.status(200).send("done")
        })

        app.get(this.prePath + "/getAll", (req, res) => {

            TodoRepo.getAll((todos: Todo[]) => {
                
                res.header("Content-Type", "application/json");
                res.status(200).send(JSON.stringify(todos))
            })
        })
    }
}