import Todo from "../model/Todo";
import fs from "fs"

export default class TodoRepo{
    
    private static fileName = "./todos.db"

    private static createIfNotExist() :void {
        if (!fs.existsSync(this.fileName))
            fs.writeFileSync(this.fileName,"[]")
    }

    static add(todo: Todo) : void {
        this.createIfNotExist()
        this.getAll((todos: Todo[]) => {
            todos.push(todo)
            fs.writeFileSync(this.fileName,JSON.stringify(todos))
        })
        
    }

    static mark(todoId: string) : void {
        this.createIfNotExist()

        this.getAll((todos: Todo[]) => {
            for (let i of todos) {
                if (i.id == todoId) {
                    let index = todos.indexOf(i)
                    i.done = true
                    todos[index] = i
                    break
                }

            }
            fs.writeFileSync(this.fileName, JSON.stringify(todos))
        })
    }

    static delete(todoId: string) : void {
        this.createIfNotExist()
        console.log("todoID: " + todoId)
        this.getAll((todos: Todo[]) => {
            console.log("count: " + todos.length)
            for (let i of todos) {
                if (i.id == todoId) { 
                    console.log("if inside")
                    todos.splice(todos.indexOf(i),1)
                    break
                }
                    
            }
            console.log("count: " + todos.length)
            fs.writeFileSync(this.fileName, JSON.stringify(todos))
        })
    }

    static getAll(cb: (todos:Todo[]) => void) {
        this.createIfNotExist()
        fs.readFile(this.fileName, (err, data) => {
            if (err) console.error(err);
            console.log(Todo.fromJsonArray(data.toString()))
            cb(Todo.fromJsonArray(data.toString()))
        })
    }
}