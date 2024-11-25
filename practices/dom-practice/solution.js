import createGameList from './data/gameData.js'
// const createGameList = require('./data/gameData.js')
const gameList = createGameList()

const initGame = () => {
    //provide initial game data list created from GameManagement class
    let games = gameList

    // 1. register event for searching and adding
    const registerEvent = () => {
        const searchInput = document.getElementById('search-bar')
        searchInput.addEventListener('keyup', searchGames)
        const addButton = document.getElementById('add-btn')
        addButton.addEventListener('click', addGame)
        const removeAllButton = document.getElementById('remove-all-btn')
        removeAllButton.addEventListener('click', removeAllGames)
    }
    // 2. Function to display one games in the display area
    const displayGame = (gameItem) => {
        const displayArea = document.getElementById('game-list')
        const gameElement = document.createElement('div')
        gameElement.className = 'game-item'
        gameElement.innerHTML = `
        <p>${gameItem.name + ' ' + gameItem.price}&nbsp;THB</p>
        <button id="${gameItem.name.trim()}-${gameItem.price}" class="remove-btn">Remove</button>
        `
        const removeButton = gameElement.querySelector('.remove-btn')
        removeButton.addEventListener('click', removeGame)
        displayArea.appendChild(gameElement)
    }
    // 3. Function to display all existing games in the display area
    const displayGames = (gameItems) => {
        const displayArea = document.getElementById('game-list')
        displayArea.innerHTML = ''
        gameItems.forEach((game) => displayGame(game))
    }
    // 4. Function to search and display matching games
    const searchGames = (event) => {
        const search = games.serchGame(event.target.value)
        displayGames(search)
    }
    // 5. Function to add a new games
    const addGame = () => {
        const name = document.getElementById('game-name')
        const price = document.getElementById('game-price')
        if (!name.value?.trim() || price.value <= 0) {
            alert('Please provide name and price')
            return
        }
        const gameList = games.addGame(name.value, price.value)
        displayGame(gameList[gameList.length - 1])
        name.value = ''
        price.value = ''
    }
    // 6. Function to remove a games
    const removeGame = (event) => {
        const btnFire = event.target
        const deleteGuest = btnFire.id
        const gameInfo = deleteGuest.split('-')
        games.removeGame({ name: gameInfo[0], price: gameInfo[1] })
        displayGames(games.getGameList())
    }
    // 7. Function to remove all games
    const removeAllGames = () => {
        displayGames(games.removeAllGames())
    }
    return {
        registerEvent,
        displayGames,
    }
}
export default initGame
// module.exports = initGame
const { registerEvent, displayGames } = initGame()
registerEvent()
displayGames(gameList.getGameList())
