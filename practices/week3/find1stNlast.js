function findFirstAndLast(str, char) {
    const firstIndex = str.indexOf(char)
    const lastIndex = str.lastIndexOf(char)
    return { firstIndex, lastIndex }
}

// Test case
console.log(findFirstAndLast('javascript', 'z')) // output: { firstIndex: 1, lastIndex: 3 }
