function findFirstAndLast(str, char) {
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
   
}

// Test case
console.log(findFirstAndLast('javascript', 'a')) // output: { firstIndex: 1, lastIndex: 3 }
