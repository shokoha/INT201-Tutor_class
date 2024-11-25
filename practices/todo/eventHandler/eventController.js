import todoManagement from '../lib/todoManagement.js'
import { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } from '../UI/todoListUI.js'

const todoManager = todoManagement()
const refreshTodoList = () => {
    showNumberOfDone(todoManager.getNumberOfDone())
    showNumberOfNotDone(todoManager.getNumberOfNotDone())
}

function addTodoHandler() {
    const todoInput = document.querySelector('#addTodo input')
    if (todoInput.value.trim().length > 0) {
        const todo = todoManager.findTodo(todoManager.addTodo(undefined, todoInput.value, false))
        showTodoItem(todo.id, todo.description)
        const todoItem = document.getElementById(todo.id)
        const todoBtn = todoItem.querySelectorAll('button')
        todoBtn[0].addEventListener('click', notDoneButtonHandler)
        todoBtn[1].addEventListener('click', removeButtonHandler)
        refreshTodoList()
    }
}

const notDoneButtonHandler = (event) => {
    const doneButtonFire = event.target
    doneButtonFire.style = 'background-color: green;color: white'
    doneButtonFire.textContent = 'Done'
    todoManager.setItemToDone(Number(doneButtonFire.parentElement.getAttribute('id')))
    refreshTodoList()
}
const removeButtonHandler = (event) => {
    const removeButtonFire = event.target
    const removeId = Number(removeButtonFire.parentElement.getAttribute('id'))
    removeTodoItem(removeId)
    todoManager.removeTodo(removeId)
    refreshTodoList()
}

export { addTodoHandler }
