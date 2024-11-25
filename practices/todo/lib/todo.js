class Todo {
    static runningId = 1
    constructor(id, desc = 'N/A', done = false) {
        if (id === undefined) {
            id = Todo.runningId++
        }
        this.id = id
        this.description = desc
        this.done = done
    }
    getTodo() {
        return { id: this.id, description: this.description }
    }
    setDescription(desc) {
        this.description = desc
    }
    setDone(done) {
        this.done = done
    }
}

// module.exports = Todo
export default Todo
