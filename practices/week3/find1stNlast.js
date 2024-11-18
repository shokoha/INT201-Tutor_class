function findFirstAndLast(str, char) {
<<<<<<< HEAD
    //! way #1
    {
        // const arrays = [...str]
        // return {
        //     firstIndex: arrays.indexOf(char),
        //     lastIndex: arrays.lastIndexOf(char)
        // }
    }
    //! way #2
    {
        
        return {
            firstIndex: str.indexOf(char),
            lastIndex: str.lastIndexOf(char)
        }
    }
   
=======
    const firstIndex = str.indexOf(char)
    const lastIndex = str.lastIndexOf(char)
    return { firstIndex, lastIndex }
>>>>>>> 27b306ee506a449af2b6e59e13318b4dfe26df03
}

// Test case
console.log(findFirstAndLast('javascript', 'z')) // output: { firstIndex: 1, lastIndex: 3 }
