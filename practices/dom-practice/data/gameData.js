import GameManagement from '../libs/gameManagement.js'
//const GameManagement = require('../libs/gameManagement.js')
const createGameList = () => {
    const gameManagement = new GameManagement()
    gameManagement.addGame('The Legend of Zelda: Breath of the Wild', 600)
    gameManagement.addGame('Super Mario Odyssey', 500)
    gameManagement.addGame('Mario Kart 8 Deluxe', 500)
    gameManagement.addGame('Splatoon 2', 550)
    gameManagement.addGame('Super Mario Party', 500)
    gameManagement.addGame('Pokémon Sword', 600)
    gameManagement.addGame('Pokémon Shield', 600)
    gameManagement.addGame('Super Smash Bros. Ultimate', 600)
    gameManagement.addGame('Animal Crossing: New Horizons', 600)
    gameManagement.addGame('Ring Fit Adventure', 600)
    return gameManagement
}

export default createGameList
// module.exports = createGameList
