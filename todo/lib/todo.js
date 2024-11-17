class Todo {
    static runningId = 1

    constructor(id, description, done = false) {
        this.id = id ?? Todo.runningId++
        this.description = description
        this.done = done
    }
    getTodo() {
        return this
    }
    setDescription(newDescription) {
        this.description = newDescription
    }
    setDone(value) {
        this.done = value
    }
}

export { Todo }
// module.exports = Todo
