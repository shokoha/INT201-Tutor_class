function validatePassword(password) {
    //! MEDTHOD WAY #1
    {
    // let ishas8Char = false
    // let ishasLower = false
    // let ishasUpper = false
    // let ishasDigit = false
    // let ishasSpecail = false
    // let lower = 'abcdefghijklmnopqrstuvwxyz'
    // let upper = lower.toUpperCase()
    // let number = '0123456789'
    // let specail = '@#$%^&*!'
    // if (password.length >= 8) ishas8Char = true

    // Array.from(password).forEach(pass => {
    //     if (lower.includes(pass)) {
    //         console.log(pass, ' is lower')
    //         ishasLower = true
    //     }
    //     else if (upper.includes(pass)) {
    //         console.log(pass, ' is upper')
    //         ishasUpper = true
    //     }
    //     else if (number.includes(pass)) {
    //         console.log(pass, ' is digit')
    //         ishasDigit = true
    //     }
    //     else if (specail.includes(pass)) {
    //         console.log(pass, ' is specail')
    //         ishasSpecail= true
    //     }
        
        
    // });
    //     return ishas8Char && ishasLower && ishasUpper && ishasDigit && ishasSpecail 
    }
     //! MEDTHOD WAY #2
    {
        if (password === null || password == undefined) return false
        const passwords = Array.from(password)
        let lower = 'abcdefghijklmnopqrstuvwxyz'
        let upper = lower.toUpperCase()
        let number = '0123456789'
        let specail = '@#$%^&*!'

        let ishas8Char = password.length >= 8
        let ishasLower = passwords.some((pass)=>lower.includes(pass))
        let ishasUpper = passwords.some((pass)=>upper.includes(pass))
        let ishasDigit = passwords.some((pass)=>number.includes(pass))
        let ishasSpecail = passwords.some((pass) => specail.includes(pass))
        return  ishas8Char && ishasLower && ishasUpper && ishasDigit && ishasSpecail 
    }
}

// Test case
console.log(validatePassword('Zky543#@')) // Expected output: true
console.log(validatePassword('1234abcd')) // Expected output: false