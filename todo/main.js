import { todoManagement } from './lib/TodoManagement.js'
import { showTodoItem, showNumberOfDone, showNumberOfNotDone } from './UI/todoListUI.js'

const todoManager = todoManagement()
const refreshTodoList = () => {
    showNumberOfDone(todoManager.getNumberOfDone())
    showNumberOfNotDone(todoManager.getNumberOfNotDone())
}
const todoId1 = todoManager.addTodo(undefined, 'Belajar JavaScript', false)
showTodoItem(todoId1, todoManager.findTodo(todoId1).description)

const todo2 = todoManager.findTodo(todoManager.addTodo(undefined, 'Belajar React', true))
showTodoItem(todo2.id, todo2.description)
refreshTodoList()
