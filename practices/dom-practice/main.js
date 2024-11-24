import createGameList from './data/gameData.js'
// const createGameList = require('./data/gameData.js')
const gameList = createGameList()

const initGame = () => {
    //provide initial game data list created from GameManagement class
    let games = gameList

    // 1. register event for searching and adding
    const registerEvent = () => {}
    // 2. Function to display one games in the display area
    const displayGame = (game) => {}
    // 3. Function to display all existing games in the display area
    const displayGames = (gamesResult) => {}
    // 4. Function to search and display matching games
    const searchGames = (event) => {}
    // 5. Function to add a new games
    const addGame = () => {}
    // 6. Function to remove a games
    const removeGame = (event) => {}
    // 7. Function to remove all games
    const removeAllGames = () => {}
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
