function addNewgame() {
    const gameIn = document.querySelector('#game-input')
    if (gameIn.value.trim().length > 0) {
        const newDiv = document.createElement('div')
        newDiv.setAttribute('id', `${gameIn.value}`)
        newDiv.setAttribute('class', 'game-item')

        const gameDiv = document.querySelector('#game-list')
        gameDiv.appendChild(newDiv)
        const newP = document.createElement('p')
        newP.textContent = gameIn.value

        const newBtn = document.createElement('button')
        newBtn.textContent = 'Remove'
        newBtn.addEventListener('click', () => {
            removeGame(newDiv.id)
        })

        newDiv.appendChild(newP)
        newDiv.appendChild(newBtn)
    }
    gameIn.value = ''
}

function removeGame(gameId) {
    const removeDiv = document.getElementById(gameId)
    const gameList = document.querySelector('#game-list')
    gameList.removeChild(removeDiv)
}

function removeAllGame() {
    const gameList = document.querySelector('#game-list')
    gameList.textContent = ''
}

function registerEvent() {
    const addBtn = document.querySelector('#add-button')
    addBtn.addEventListener('click', addNewgame)
    const removeAllBtn = document.querySelector('#removeAll-button')
    removeAllBtn.addEventListener('click', removeAllGame)
}

registerEvent()
