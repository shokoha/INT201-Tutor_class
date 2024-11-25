import { addTodoHandler } from './eventHandler/eventController.js'

const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', addTodoHandler)
