function formatString(str, type) {
    // if (type === 'lower') {
    //     return str.toLowerCase()
    // } else if (type === 'upper') {
    //     return str.toUpperCase()
    // } else {
    //     return str
    // }
    if (str === undefined || str === null || typeof str !== 'string') return undefined
    return type === 'lower' ? str.toLowerCase() : type === 'upper' ? str.toUpperCase() : str
}

// Test case
console.log(formatString('eiei', 'lower')) // Expected output: 123
console.log(formatString('Test', 'UPPer')) // Expected output: '123'
