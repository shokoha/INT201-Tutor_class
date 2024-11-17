import { Todo } from './todo.js'
// const Todo = require('./todo.js')
function todoManagement() {
    let todos = []
    function addTodo(id, desc, done) {
        todos.push(new Todo(id, desc, done))
        return todos[todos.length - 1].id
    }
    function findTodo(searchId) {
        return todos.find((todo) => todo.id === searchId)
    }
    function findTodoIndex(searchId) {
        return todos.findIndex((todo) => todo.id === searchId)
    }
    function removeTodo(removeId) {
        todos = todos.filter((todo) => todo.id !== removeId)
    }
    function getTodos() {
        return todos
    }
    function getNumberOfDone() {
        return todos.filter((todo) => todo.done).length
    }
    function getNumberOfNotDone() {
        return todos.filter((todo) => !todo.done).length
    }
    function clearTodo() {
        todos = []
    }
    return {
        addTodo,
        findTodo,
        findTodoIndex,
        removeTodo,
        getTodos,
        getNumberOfDone,
        getNumberOfNotDone,
        clearTodo
    }
}
export { todoManagement }
// module.exports = todoManagement
