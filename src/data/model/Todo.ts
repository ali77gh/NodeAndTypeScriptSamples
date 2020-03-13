

export default class Todo{

    private _id :string
    private _name : string
    private _description : string
    private _done: boolean

    static getInstance(name: string, description: string) :Todo {
        
        let todo = new Todo();
        todo._id = this.genRandID()
        todo._name = name;
        todo._description = description;   
        todo._done = false

        return todo;
    }

    private static getParserInstance(name: string, description: string, id: string, done: boolean) : Todo {
        
        let todo = new Todo();
        todo._id = id
        todo._name = name;
        todo._description = description;
        todo._done = done

        return todo;
        
    }

    static fromJson(json: string) : Todo {

        let obj = JSON.parse(json)
        
        return Todo.getParserInstance(obj["_name"], obj["_description"], obj["_id"], obj["_done"])
    }

    static fromJsonArray(jsonArray: string): Todo[] {

        let result : Todo[] = []
        for (let obj of JSON.parse(jsonArray)) {
            result.push(Todo.getParserInstance(obj["_name"], obj["_description"], obj["_id"], obj["_done"]))
        }

        return result
    }

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get description() {
        return this._description
    }

    get done() {
        return this._done
    }

    set done(done: boolean) {
        this._done = done
    }

    static genRandID() : string {
        return Math.floor(Math.random() * 1000000).toString();
    }
}