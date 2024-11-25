// const Todo = require('./Todo.js')
import Todo from './Todo.js'
function todoManagement() {
    const todos = []
    function addTodo(id, desc, done) {
        const todo = new Todo(id, desc, done)
        todos.push(todo)
        return todo.id
    }
    function findTodo(searchId) {
        return todos.find((todo) => todo.id === searchId)
    }
    function findIndexTodo(searchId) {
        return todos.findIndex((todo) => todo.id === searchId)
    }
    function removeTodo(removeId) {
        const foundIndex = findIndexTodo(removeId)
        todos.splice(foundIndex, 1)
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
        todos.splice(0, todos.length)
    }

    //add on
    function setItemToDone(doneId) {
        const todo = findTodo(doneId)
        todo.setDone(true)
    }
    return { addTodo, findTodo, removeTodo, getTodos, getNumberOfDone, getNumberOfNotDone, clearTodo, setItemToDone }
}
export default  todoManagement 
