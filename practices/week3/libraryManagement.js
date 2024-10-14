// Library array to store book objects
let library = []

// Function to add a new book
function addBook(title, author) {
    const book = { title, author, isAvailable: true }
    library.push(book)
}

// Function to borrow a book by title
function borrowBook(title) {
    const book = library.find((book) => book.title === title)
    if (book) {
        book.isAvailable = false
    }
}

// Function to return a book by title
function returnBook(title) {
    const book = library.find((book) => book.title === title)
    if (book) {
        book.isAvailable = true
    }
}

// Function to list all available books
function listAvailableBooks() {
    return library.filter((book) => book.isAvailable)
}

// Test cases
addBook('The Great Gatsby', 'F. Scott Fitzgerald')
addBook('1984', 'George Orwell')
borrowBook('19846')
console.log(listAvailableBooks()) // Expected output: List of available books except "1984"
returnBook('1984')
console.log(listAvailableBooks()) // Expected output: All books including "1984"
