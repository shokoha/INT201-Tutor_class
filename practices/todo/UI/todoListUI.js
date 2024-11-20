function showTodoItem(newId, newDescription) {
    const todoList = document.querySelector('#listTodo')
    const todoItem = document.createElement('div')
    todoItem.setAttribute('id', newId)
    todoItem.setAttribute('class', 'todoItem')

    const todoDesc = document.createElement('p')
    todoDesc.textContent = newDescription
    todoItem.appendChild(todoDesc)

    const todoStatus = document.createElement('button')
    todoStatus.textContent = 'Not Done'
    todoItem.appendChild(todoStatus)

    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'remove'
    todoItem.appendChild(removeBtn)

    todoList.appendChild(todoItem)
}

function showNumberOfDone(numberOfDone) {
    const done = document.querySelector('#done')
    done.textContent = `Number of Done:${numberOfDone}`
}
function showNumberOfNotDone(numberOfNotDone) {
    const notDone = document.querySelector('#notDone')
    notDone.textContent = `Number of Not Done:${numberOfNotDone}`
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone }
// module.exports = { showTodoItem, showNumberOfDone, showNumberOfNotDone }
