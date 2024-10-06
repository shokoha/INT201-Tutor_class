// Library array to store book objects
let library = []

// Function to add a new book
function addBook(title, author) {
    // Your code here
}

// Function to borrow a book by title
function borrowBook(title) {
    // Your code here
}

// Function to return a book by title
function returnBook(title) {
    // Your code here
}

// Function to list all available books
function listAvailableBooks() {
    // Your code here
}

// Test cases
addBook('The Great Gatsby', 'F. Scott Fitzgerald')
addBook('1984', 'George Orwell')
borrowBook('1984')
listAvailableBooks() // Expected output: List of available books except "1984"
returnBook('1984')
listAvailableBooks() // Expected output: All books including "1984"
