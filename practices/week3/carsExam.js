class CarInventory {
    constructor() {
        this.cars = []
    }

    addCar(make, model, year, color) {
        // Implement logic here
    }

    getAllCars() {
        // Implement logic here
    }

    findCarsByColor(color) {
        // Implement logic here
    }

    updateCar(make, model, updatedDetails) {
        // Implement logic here
    }

    deleteCar(make, model) {
        // Implement logic here
    }
}

// Test Cases
const myInventory = new CarInventory()

// Test addCar
console.log(myInventory.addCar('Toyota', 'Camry', 2020, 'Blue'))
// Expected output: { make: 'Toyota', model: 'Camry', year: 2020, color: 'Blue' }

console.log(myInventory.addCar('Honda', 'Civic', 2019, 'Black'))
// Expected output: { make: 'Honda', model: 'Civic', year: 2019, color: 'Black' }

console.log(myInventory.addCar('Toyota', 'Camry', 2021, 'Red'))
// Expected output: undefined (duplicate entry)

console.log(myInventory.addCar('Ford', 'Mustang'))
// Expected output: undefined (missing details)

// Test getAllCars
console.log(myInventory.getAllCars())
// Expected output: Array of all added cars, e.g., [{ make: 'Toyota', model: 'Camry', year: 2020, color: 'Blue' }, { make: 'Honda', model: 'Civic', year: 2019, color: 'Black' }]

// Test findCarsByColor
console.log(myInventory.findCarsByColor('Blue'))
// Expected output: [{ make: 'Toyota', model: 'Camry', year: 2020, color: 'Blue' }]

console.log(myInventory.findCarsByColor('Red'))
// Expected output: [] (no car with color Red in inventory)

// Test updateCar
console.log(myInventory.updateCar('Toyota', 'Camry', { year: 2022, color: 'Green' }))
// Expected output: { make: 'Toyota', model: 'Camry', year: 2022, color: 'Green' } (updated car object)

console.log(myInventory.updateCar('Ford', 'Focus', { year: 2020 }))
// Expected output: undefined (car not found)

// Test deleteCar
console.log(myInventory.deleteCar('Honda', 'Civic'))
// Expected output: { make: 'Honda', model: 'Civic', year: 2019, color: 'Black' } (deleted car object)

console.log(myInventory.deleteCar('Tesla', 'Model 3'))
// Expected output: undefined (car not found)

// Verify remaining cars in inventory
console.log(myInventory.getAllCars())
// Expected output: Remaining cars after deletion, e.g., [{ make: 'Toyota', model: 'Camry', year: 2022, color: 'Green' }]
