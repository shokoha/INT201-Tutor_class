class GameArcade {
    static autoId = 1

    constructor() {
        this.games = []
    }

    findGameId(id) {
        return this.games.findIndex((game) => game.gameId === id)
    }

    addGame(name) {
        if (this.games.findIndex((game) => game.gameName.toLowerCase() === name.toLowerCase()) !== -1) {
            return -1
        }
        const gameId = GameArcade.autoId++
        this.games.push({ gameId, gameName: name })
        return this.games.length
    }

    removeGame(id) {
        const index = this.findGameId(id)
        if (index === -1) {
            return -1
        }
        this.games.splice(index, 1)
        return id
    }

    getAllGames() {
        return this.games
    }

    getGameById(id) {
        return this.games.find((game) => game.gameId === id)
    }
}

// test cases
{
    // Test Case 1: Check initial state
    const arcade = new GameArcade()
    console.log(arcade.getAllGames()) // Expected: [] (empty array)

    // Test Case 2: Add a new game
    console.log(arcade.addGame('Pac-Man')) // Expected: 1 (new game added)
    console.log(arcade.getAllGames()) // Expected: [{ gameId: 1, gameName: 'Pac-Man' }]

    // Test Case 3: Add another game
    console.log(arcade.addGame('Space Invaders')) // Expected: 2 (new game added)
    console.log(arcade.getAllGames()) // Expected: [{ gameId: 1, gameName: 'Pac-Man' }, { gameId: 2, gameName: 'Space Invaders' }]

    // Test Case 4: Attempt to add a game with the same name
    console.log(arcade.addGame('Pac-Man')) // Expected: -1 (duplicate game)

    // Test Case 5: Find game by ID
    console.log(arcade.findGameId(1)) // Expected: 0 (first game found)
    console.log(arcade.findGameId(2)) // Expected: 1 (second game found)
    console.log(arcade.findGameId(3)) // Expected: -1 (no game found)

    // Test Case 6: Remove a game by ID
    console.log(arcade.removeGame(1)) // Expected: 1 (game removed)
    console.log(arcade.getAllGames()) // Expected: [{ gameId: 2, gameName: 'Space Invaders' }]

    // Test Case 7: Attempt to remove a game that does not exist
    console.log(arcade.removeGame(3)) // Expected: -1 (no game found)

    // Test Case 8: Get a game by ID
    console.log(arcade.getGameById(2)) // Expected: { gameId: 2, gameName: 'Space Invaders' }
    console.log(arcade.getGameById(1)) // Expected: undefined (game not found)
}
