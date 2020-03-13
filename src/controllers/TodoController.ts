import Todo from "./../data/model/Todo"
import TodoRepo from "../data/repo/TodoRepo"

export default class TodoController{

    private static prePath = "/todo"

    static init(app) {
        
        app.post(this.prePath + "/add", (req, res) => {
            
            let todo = Todo.getInstance(
                req.header('name'),
                req.header('description')
            )
            TodoRepo.add(todo)
            res.status(200).send("done")
        })

        app.post(this.prePath + "/remove", (req, res) => {

            TodoRepo.delete(req.header('todoId'))
            res.status(200).send("done")
        })

        app.post(this.prePath + "/mark", (req, res) => {

            TodoRepo.mark(req.header('todoId'))
            res.status(200).send("done")
        })

        app.post(this.prePath + "/getAll", (req, res) => {

            TodoRepo.getAll((todos: Todo[]) => {
                
                res.header("Content-Type", "application/json");
                res.status(200).send(JSON.stringify(todos))
            })
        })
    }
}