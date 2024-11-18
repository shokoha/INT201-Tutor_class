class Stock {
    constructor() {
        this.stockItems = [] 
    }

    findItemIndex(id) {
        return this.stockItems.findIndex((item) => item.id === id)
    }

    addItem(id, amount) {
        if (!id || amount <= 0) {
            return -1 
        }

        const index = this.findItemIndex(id)
        if (index === -1) {
            this.stockItems.push({ id: id, quantity: amount })
        } else {
            this.stockItems[index].quantity += amount
        }
        return amount  
    }

    addItems(items) {
        let totalAdded = 0
        items.forEach((item) => {
            const { itemId, quantity } = item
            const result = this.addItem(itemId, quantity)
            if (result !== -1) {
                totalAdded += result
            }
        })
        return totalAdded
    }

    sell(id, amount) {
        const index = this.findItemIndex(id)
        if (index === -1 || this.stockItems[index].quantity < amount) {
            return -1 
        }

        this.stockItems[index].quantity -= amount
        return amount 
    }

    getAllStockAmount() {
        return this.stockItems.reduce((total, item) => total + item.quantity, 0)
    }
    getStockItems() {
        return this.stockItems
    }   
}

// Test cases
{
    // Test Case 1: Create a new Stock instance and add items
    const stock = new Stock();
    console.log(stock.addItem('item1', 100)); // Expected: 100 (item added)
    console.log(stock.addItem('item2', 200)); // Expected: 200 (item added)
    console.log(stock.addItem('item1', 50));  // Expected: 50 (item quantity updated)
    console.log(stock.addItem(null, 100));    // Expected: -1 (invalid id)
    console.log(stock.addItem('item3', null)); // Expected: -1 (invalid amount)
    console.log('-----------------------------------------------------');

    // Test Case 2: Add multiple items at once
    const itemsToAdd = [
        { itemId: 'item4', quantity: 150 },
        { itemId: 'item5', quantity: 250 }
    ];
    console.log(stock.addItems(itemsToAdd)); // Expected: 2 (two items added)
    console.log('-----------------------------------------------------');

    // Test Case 3: Sell items
    console.log(stock.sell('item1', 30)); // Expected: 30 (amount sold)
    console.log(stock.sell('item2', 300)); // Expected: 200 (exceeds stock, sold all)
    console.log(stock.sell('item5', 100)); // Expected: 100 (amount sold)
    console.log(stock.sell('item6', 10)); // Expected: -1 (item not found)
    console.log('-----------------------------------------------------');

    // Test Case 4: Get total stock amount
    console.log(stock.getAllStockAmount()); // Expected: total quantity of all items
    console.log(stock.getStockItems()); // Expected: array of stock items
    console.log('-----------------------------------------------------');
}
