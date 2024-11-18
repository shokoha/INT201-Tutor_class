# Game Arcade Class Requirements

## Class: GameArcade

### Properties
- `games`: An array to store game objects with properties for `gameId` and `gameName`.
- `static autoId`: A static property to auto-generate IDs, starting from 1.

### Methods

- `constructor()`
  - Initializes a new `GameArcade` object with an empty `games` array.

- `findGameId(id)`
  - **Parameters:**
    - `id`: The ID of the game to find.
  - **Returns:** The index of the game with the specified `id`, or `-1` if not found.

- `addGame(name)`
  - **Parameters:**
    - `name`: The name of the game to add.
  - **Returns:** The new length of the `games` array after adding the game, or `-1` if a game with that name already exists.

- `removeGame(id)`
  - **Parameters:**
    - `id`: The ID of the game to remove.
  - **Returns:** The `id` of the removed game, or `-1` if the game with that ID does not exist.

- `getAllGames()`
  - **Returns:** An array of all games in the arcade.

- `getGameById(id)`
  - **Parameters:**
    - `id`: The ID of the game to retrieve.
  - **Returns:** The game object with the specified `id`, or `undefined` if not found.
