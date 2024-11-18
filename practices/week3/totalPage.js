function totalPages(arrayItems, rowsPerPage) {
<<<<<<< HEAD
    if (arrayItems === undefined || arrayItems === null)  return undefined
    if (!rowsPerPage || rowsPerPage === 0) return 1

    return Math.ceil( arrayItems.length / rowsPerPage)
    
=======
    if (arrayItems == null || arrayItems == undefined) return undefined
    if (rowsPerPage == null || rowsPerPage == undefined || rowsPerPage == 0) return 1
    return Math.ceil(arrayItems.length / rowsPerPage)
>>>>>>> 27b306ee506a449af2b6e59e13318b4dfe26df03
}

const arrayItems = Array.from({ length: 40 }, (_, i) => i + 1)

console.log(arrayItems.slice(0, 15)) // Output: [1, 2, 3, 4, 5, ..., 15]
console.log(arrayItems) // Output: [16, 17, 18, 19, 20, ..., 40]

// Test cases
console.log(totalPages(arrayItems.slice(0, 35), 15)) // Expected output: 3
console.log(totalPages(arrayItems.slice(0, 10), 20)) // Expected output: 1
console.log(totalPages(arrayItems, 10)) // Expected output: 4
console.log(totalPages(arrayItems.slice(0, 25), 0)) // Expected output: 1
console.log(totalPages(arrayItems.slice(0, 25), null)) // Expected output: 1
console.log(totalPages(arrayItems.slice(0, 25), undefined)) // Expected output: 1
console.log(totalPages(null, 20)) // Expected output: undefined
console.log(totalPages(undefined, 20)) // Expected output: undefined
