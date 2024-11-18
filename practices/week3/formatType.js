function formatString(str, type) {
<<<<<<< HEAD
=======
    // if (type === 'lower') {
    //     return str.toLowerCase()
    // } else if (type === 'upper') {
    //     return str.toUpperCase()
    // } else {
    //     return str
    // }
    if (str === undefined || str === null || typeof str !== 'string') return undefined
>>>>>>> 27b306ee506a449af2b6e59e13318b4dfe26df03
    return type === 'lower' ? str.toLowerCase() : type === 'upper' ? str.toUpperCase() : str
}

// Test case
<<<<<<< HEAD
console.log(formatString('eiei', 'lower')) // Expected output: 'eiei'
console.log(formatString('Test', 'upper')) // Expected output: 'TEST'
console.log(formatString('mind', 'UPPER')) // Expected output: 'TEST'
=======
console.log(formatString('eiei', 'lower')) // Expected output: 123
console.log(formatString('Test', 'UPPer')) // Expected output: '123'
>>>>>>> 27b306ee506a449af2b6e59e13318b4dfe26df03
