# Stock Class Requirements

## Class: Stock

### Properties
- `stockItems`: An array to store stock items.

### Methods
- `constructor()`
  - Initializes an empty array for stock items.
  
- `findItemIndex(id)`
  - **Returns:** The index of the item with the specified `id`, or -1 if not found.

- `addItem(id, amount)`
  - **Parameters:**
    - `id`: The ID of the item to add.
    - `amount`: The quantity of the item to add.
  - **Returns:** The added amount or -1 if `id` or `amount` is invalid.

- `addItems(items)`
  - **Parameters:**
    - `items`: An array of objects with `itemId` and `quantity` properties.
  - **Returns:** The total number of items successfully added.

- `sell(id, amount)`
  - **Parameters:**
    - `id`: The ID of the item to sell.
    - `amount`: The quantity to sell.
  - **Returns:** The amount sold or -1 if the item is not found.

- `getAllStockAmount()`
  - **Returns:** The total quantity of all stock items.
