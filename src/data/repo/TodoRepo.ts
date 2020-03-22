import Todo from "../model/Todo";
import Database from 'better-sqlite3';


//                                          sql injection note

// SQLite protects you against SQL injections if you specify user - supplied data as part of the params rather than stringing together an SQL query:
// BAD: db.prepare("INSERT INTO foo VALUES(" + variable + ")");
// GOOD: db.prepare("INSERT INTO foo VALUES (?)", variable);
// By using the placeholder ?, SQLite automatically treats the data as input data and it does not interfere with parsing the actual SQL statement.

var a = class TodoRepo {

    private static fileName = "./todos.db"

    private static tableName = "todo"

    private static db;

    static init() {
        this.db = new Database(this.fileName, { verbose: console.log });
        this.db.exec(`
        create table IF NOT EXISTS ${this.tableName} (
            id            text not null,
            name          text not null,
            description   text not null,
            done          integer 
        );
        `);
    }

    static add(todo: Todo): void {

        const insert = this.db.prepare(`INSERT INTO ${this.tableName} (id, name, description, done) VALUES (?, ?, ?, ?)`);

        console.log(todo)
        insert.run(todo.id,todo.name,todo.description,todo.doneAsNum)
        // this.db.exec(`INSERT INTO
        //  ${this.tableName} (id, name, description, done)
        //  VALUES ('${todo.id}', '${todo.name}' , '${todo.description}' , ${todo.doneAsNum});`)
    }

    static mark(todoId: string): void {
        this.db.prepare(`UPDATE ${this.tableName} 
            SET done = 1 
            WHERE id = ?;
            `).run(todoId)
    }

    static delete(todoId: string): void {
        this.db.prepare(`DELETE FROM ${this.tableName}
                WHERE id = ?;`).run(todoId);
    }

    static getAll(cb: (todos: Todo[]) => void) {
        cb(this.db.prepare(`SELECT * FROM ${this.tableName}`).all());
    }
}

a.init()
export default a;