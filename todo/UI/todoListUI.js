function showTodoItem(newId, newDescription) {
    const todoList = document.getElementById('listTodo')
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', `${newId}`)
    newDiv.setAttribute('class', 'todoItem')

    const newP = document.createElement('p')
    newP.textContent = newDescription
    newDiv.appendChild(newP)

    const statusBtn = document.createElement('button')
    statusBtn.textContent = 'Not Done'
    newDiv.appendChild(statusBtn)

    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove'
    newDiv.appendChild(removeBtn)

    todoList.appendChild(newDiv)
}

function showNumberOfDone(numberOfDone) {
    const doneNumber = document.getElementById('done')
    doneNumber.textContent += numberOfDone
}
function showNumberOfNotDone(numberOfNotDone) {
    const notDoneNumber = document.getElementById('notDone')
    notDoneNumber.textContent += numberOfNotDone
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone }
// module.exports = { showTodoItem, showNumberOfDone, showNumberOfNotDone }