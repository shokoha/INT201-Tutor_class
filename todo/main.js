import { todoManagement } from './lib/todoManagement.js'
import { showTodoItem, showNumberOfDone, showNumberOfNotDone } from './UI/todoListUI.js'
const todoManager = todoManagement()
const firstId = todoManager.addTodo(1, 'Learn JavaScript', false)
showTodoItem(firstId, todoManager.findTodo(firstId).description)
showNumberOfDone(todoManager.getNumberOfDone())
showNumberOfNotDone(todoManager.getNumberOfNotDone())

