//Operators practice
{
    console.log('Operators practice')

    function modifyNumber(num) {
        let temp = num
        temp += 10
        temp -= 5
        temp *= 3
        temp /= 2
        return temp
    }

    console.log(modifyNumber(5))
    console.log(modifyNumber(0))
    console.log(modifyNumber(-5))

    function checkEvenOrOdd(num) {
        let mode = num % 2
        return mode === 0 ? "Even" : "Odd"
    }

    console.log(checkEvenOrOdd(5))
    console.log(checkEvenOrOdd(0))
    console.log(checkEvenOrOdd(-5))
}

//optional chaining, nullish coalescing, conditional operator pratice
{
    console.log('=================')
    console.log('optional chaining, nullish coalescing, conditional operator pratice')

    const userProfile = {
        name: null,
        age: undefined,
        preferences: {
            theme: 'dark',
            notifications: {
                email: false,
                sms: null,
            },
        },
    }

    function getUserPreferences(userProfile) {
        // Your logic here
        return {
            name: userProfile?.name ?? "Guest",
            age: userProfile?.age ?? 18,
            userEmailNotification : userProfile?.preferences?.notifications?.email  ? "notifications enabled" : "notifications disabled"
        }
    }

    console.log(getUserPreferences(userProfile))
}

//Math practice
{
    console.log('=================')
    console.log('Math practice')

    function rollDice() {
        // Your logic here
        random = Math.random()*6 + 1
        result = Math.floor(random) 
        return result
    }
    console.log(rollDice()) //should return a random number between 1 and 6

    function generateRandomNumber(min, max) {
        // Your logic here
        return  Math.floor(Math.random()*(max-min+1)) + min
    }
    console.log(generateRandomNumber(50, 55))
}

//Conditional practice
{
    console.log('=================')
    console.log('Conditional practice')

    function categorizeAge(age) {
        return age < 13 ? "child" :
            age <= 19 ? "teen" :
            age <= 59 ? "adult" :
            "senior"  
    }

    // Example Calls:
    console.log(categorizeAge(10)) // Output: child
    console.log(categorizeAge(16)) // Output: teen
    console.log(categorizeAge(35)) // Output: adult
    console.log(categorizeAge(70)) // Output: senior
}

//For loop example and practice
{
    console.log('=================')
    console.log('For loop example and practice')
    const arr = [1, 2, 3]

    for (const n in arr) {
        console.log('forin', n)
    }
    for (const n of arr) {
        console.log('forof', n)
    }
    arr.forEach((n) => console.log('foreach', n))

    function sumArray(arr) {
        let sum=0
        arr.forEach((num) => (sum += num))
        return sum
    }

    const numbers = [5, 10, 15, 20]
    console.log('The sum is:', sumArray(numbers)) // Example output: The sum is: 50
}

//Comparing practice
{
    console.log('=================')
    console.log('Comparing practice')

    function areObjectsEqual(obj1, obj2) {
        const keys1 = Object.keys(obj1)
        const keys2 = Object.keys(obj2)
        if (keys1.length !== keys2.length) return false
        for (let key of keys1) {
            if (!obj2.hasOwnProperty(key)) return false
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                if (!areObjectsEqual(obj1[key], obj2[key])) {
                    return false
                }
            }  else {
                if(obj1[key]!==obj2[key]) return false
            }
        }return true
    }
 
}

    const obj1 = { name: 'John', age: 30 }
    const obj2 = { age: 30, name: 'John' }
    const obj3 = { name: 'John', age: 23 }

    console.log(areObjectsEqual(obj1, obj2)) // should return true
    console.log(areObjectsEqual(obj1, obj3)) // should return false


//Array
{
    console.log('=================')
    console.log('Array')

    //Array literals
    {
        console.log('1.Array literals')

        const numbers = [1, 2, 3, 4, 5] // Basic Array of Numbers
        const fruits = ['apple', 'banana', 'cherry'] // Array of Strings
        const mixedArray = [42, 'hello', true, null, { name: 'John' }] // Mixed Data Types
        const nestedArray = [
            [1, 2],
            [3, 4],
            [5, 6],
        ] // Nested Arrays
        const emptyArray = [] // Empty Array
        const users = [
            // Array of Objects
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' },
        ]
        const variedArray = [true, 'text', 123, null, undefined, { key: 'value' }, [1, 2, 3]] // Array with Various Data Types
        console.log(numbers)
        console.log(fruits)
        console.log(mixedArray)
    }

    //Spread operator
    {
        console.log('2.Spread operator')

        const originalArray = [1, 2, { name: 'Alice' }] // originalArray contains a number, a number, and an object

        // Create a new array using the spread operator
        const newArray = [...originalArray]

        console.log(originalArray) // Output: [1, 2, { name: "Alice" }]
        console.log(newArray) // Output: [1, 2, { name: "Alice" }]

        // Check if they are the same reference
        console.log(originalArray === newArray) // Output: false

        // Modify an object in the original array
        originalArray[2].name = 'Bob'
        originalArray[1] = 35

        console.log(originalArray) // Output: [1, 35, { name: "Bob" }]
        console.log(newArray) // Output: [1, 2, { name: "Bob" }]  // Notice that object it also changed in newArray

        // Deep copy
        {
            console.log('Deep copy')

            const oArr = [1, 2, { name: 'Alice' }]
            //using JSON.parse(JSON.stringify())
            const deepCopyArr = JSON.parse(JSON.stringify(oArr))

            deepCopyArr[2].name = 'James'

            console.log(oArr) // Output: [1, 2, { name: "Alice" }]
            console.log(deepCopyArr) // Output: [1, 2, { name: "James" }]

            //using deep copy function
            function deepCopy(arr) {
                return arr.map((item) => (Array.isArray(item) ? deepCopy(item) : typeof item === 'object' ? { ...item } : item))
            }

            const deepCopyArray = deepCopy(oArr)

            deepCopyArray[2].name = 'Billy'

            console.log(oArr) // Output: [1, 2, { name: "Alice" }]
            console.log(deepCopyArray) // Output: [1, 2, { name: "Billy" }]
        }
    }

    //Array() constructor
    {
        console.log('3.Array() constructor')
        // Array() constructor
        {
            // Creating an array with a specified length
            const arr = new Array(3) // Creates an array with 5 empty slots
            console.log(arr) // Output: [ <3 empty items> ]

            const arr2 = new Array(1, 2, 3) // Creates an array with 3 elements
            console.log(arr2) // Output: [1, 2, 3]
        }
        // Array.of()
        {
            // Creating an array with a single numeric element
            const arr3 = Array.of(3) // Creates an array with one element: 3
            console.log(arr3) // Output: [3]

            // Creating an array with multiple elements
            const arr4 = Array.of(1, 2, 3) // Creates an array with the given elements
            console.log(arr4) // Output: [1, 2, 3]
        }
        // Array.from()
        {
            // Creating an array from a string (iterable object)
            const arr5 = Array.from('hello')
            console.log(arr5) // Output: ['h', 'e', 'l', 'l', 'o']

            // Creating an array from a Set (iterable object)
            const set = new Set([1, 2, 3])
            const arr6 = Array.from(set)
            console.log(arr6) // Output: [1, 2, 3]

            // Using a mapping function to transform elements
            const arr7 = Array.from([1, 2, 3], (x) => x * 2) // Multiplies each element by 2
            console.log(arr7) // Output: [2, 4, 6]

            const arr8 = Array.from(4) //cannot create an array with a single numeric element
            console.log(arr8) // Output: []
        }
    }

    //destructuring
    {
        console.log('4.Destructuring')

        const arr = [1, 2, 3, 4, 5]

        // Destructuring an array
        const [first, second, ...rest] = arr

        console.log(first) // Output: 1
        console.log(second) // Output: 2
        console.log(rest) // Output: [3, 4, 5]

        // Destructuring an object
        const user = { id: 1, name: 'Alice', age: 30 }

        const { id, name, age } = user

        console.log(id) // Output: 1
        console.log(name) // Output: Alice
        console.log(age) // Output: 30
    }
}

//Array practice
{
    console.log('=================')
    console.log('Array practice')

    //1. groupByParity
    {
        function groupByParity(arr) {
            // Your logic here
            let arrOdd = []
            let arrEven = []
            arr.forEach(function (num) {
                
                temp = num % 2
                if (temp === 0) {
                     arrEven.push(num)
                } else {
                     arrOdd.push(num)
                }
              
            })
            return [ arrEven,arrOdd ]
        }

        const numbers = [1, 2, 3, 4, 5, 6]
        console.log(groupByParity(numbers)) // Output: [[2, 4, 6], [1, 3, 5]]
    }

    //2. findMax element in an array
    {
        function findMax(arr) {
            
        }

        const numbers = [1, 5, 3, 9, 2]
        console.log(findMax(numbers)) // Output: 9
    }

    //3. count occurrences in an array
    {
        function countOccurrences(arr) {
            // Your logic here
        }

        const numbers = [1, 2, 2, 3, 1, 4, 3, 3]
        console.log(countOccurrences(numbers)) // Output: { 1: 2, 2: 2, 3: 3, 4: 1 }
    }
}

//challenge practice
{
    function processStudentScores(students) {
        // Your logic here
    }

    const students = [
        { name: 'James', scores: [85, 90, 78] },
        { name: 'Sophia', scores: [45, 55, 65] },
        { name: 'Mike', scores: [95, 92, 88] },
        { name: 'Alex', scores: [60, 70, 80] },
        { name: 'Ella', scores: [35, 40, 50] },
    ]

    console.log(processStudentScores(students))
}
