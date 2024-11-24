# Game Management Program

This project involves managing a list of games using various features such as searching, adding, and removing games from the list. Below are the details and requirements for implementing the program.

## Files Overview
You are provided with the following files:

1. **index.html** - The main HTML file.
2. **./lib/GameManagement.js** - Contains game properties, a constructor, and methods for managing games.
3. **./data/gameData.js** - Provides initial game data created using the `GameManagement` class.
4. **main.js** - The file where you will implement the program using nested functions (do not edit the initial code provided).

## main.js Requirements

### Constant Variables:
- **games**: The initial game data list created from the `GameManagement` class.

### Nested Functions to Implement:

#### 1. **registerEventHandling()**
This function is responsible for adding event listeners for various game management actions:
- Register a `"keyup"` event on the search input field. When the user types, the `searchGames` function should be triggered to filter and display games based on the search keyword.
- Register a `"click"` event for the `"Add Game"` button to add new games. The event handler function should be `addGame`.
- Register a `"click"` event for the `"Remove All Games"` button to remove all games. The event handler function should be `removeAllGames`.

#### 2. **addGame()**
This function adds a new game to the list:
- Retrieves the game's name and price from the respective input fields.
- Adds the new game to the list using the `addNewGame(name, price)` method in `GameManagement`.
- Displays the new game in the display area (`#game-list`) using the `displayGame(newGameObject)` function.
- Clears the input fields for name and price after adding the game.

#### 3. **displayGames(gameItems)**
This function displays the list of games:
- Clears all previous children in the `#game-list` div.
- Iterates over the `gameItems` array and calls `displayGame(gameItem)` for each game.

Example structure for displaying the games:
```html
<div id="game-list">
  <!-- Game list will be displayed here -->
</div>

```
- **displayGame(gameItem)** - Dynamically creates HTML elements for a single game based on the following structure:
    ```
    <div class="game-item">
    <p>name price THB</p>
    <button id="name-price" class="remove-btn">Remove</button>
    </div>
    ```

Creates a <div> with the class game-item.
Adds the game name, price, and a "Remove" button:
The "Remove" button is a <button> element with:
A class of remove-btn.
An id attribute that concatenates the game name and price with a hyphen (-).
Example id for the game "Splatoon 2 550": id="Splatoon 2-550".
Adds an event handler to the "Remove" button that calls the removeGame function when clicked.
Example HTML for a game {name: 'Splatoon 2', price: 550}:

    ```
    <div class="game-item">
    <p>Splatoon 2 550 THB</p>
    <button id="Splatoon 2-550" class="remove-btn">Remove</button>
    </div>
    ```
- **searchGames(event)** - This function filters games based on a search keyword:
Calls the searchGames(keyword) function in GameManagement using the search input value.
Displays the matching games in real time by calling displayGames(gameItems).
- **removeGame(event)** - This function removes a game:
Triggered by clicking the "Remove" button next to a game's name.
Retrieves the game's name and price from the id attribute of the clicked button.
Removes the game from the list using the removeGame(deleteGame) method in GameManagement.
Updates the display area by removing the <div> element for the deleted game.

