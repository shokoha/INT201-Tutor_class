class GameManagement {
    constructor() {
        this.gameList = []
    }

    addGame(name, price) {
        name = name.trim()
        if (!name || !price) {
            throw new Error('Please provide name and price')
        }
        this.gameList.push({ name, price })
        return this.gameList
    }

    getGameList() {
        return this.gameList
    }

    removeGame(deleteGame) {
        const index = this.gameList.findIndex((game) => game.name.trim().toLowerCase() === deleteGame.name.trim().toLowerCase() && game.price == deleteGame.price)
        if (index < 0 || index >= this.gameList.length) {
            throw new Error('Game not found')
        }
        return this.gameList.splice(index, 1)
    }

    removeAllGames() {
        this.gameList = []
        return this.gameList
    }

    serchGame(keyword) {
        const lowerKeyword = keyword
        return this.gameList.filter((game) => game.name.toLowerCase().includes(lowerKeyword) || game.price.toString().includes(lowerKeyword))
    }
}

export default GameManagement
// module.exports = GameManagement
