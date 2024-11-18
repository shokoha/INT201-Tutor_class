function formatString(str, type) {
    return type === 'lower' ? str.toLowerCase() : type === 'upper' ? str.toUpperCase() : str
}

// Test case
console.log(formatString('eiei', 'lower')) // Expected output: 'eiei'
console.log(formatString('Test', 'upper')) // Expected output: 'TEST'
console.log(formatString('mind', 'UPPER')) // Expected output: 'TEST'