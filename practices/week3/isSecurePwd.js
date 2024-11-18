// function validatePassword(password) {
//     if (password == null || password == undefined) return false
//     let isHas8char = false
//     let isHasLower = false
//     let isHasUpper = false
//     let isHasDigit = false
//     let isHasSpecial = false
//     let lower = 'abcdefghijklmnopqrstuvwxyz'
//     let upper = lower.toUpperCase()
//     let digit = '0123456789'
//     let special = '@#%$^&*!'
//     if (password.length >= 8) isHas8char = true
//     Array.from(password).forEach((pass) => {
//         if (lower.includes(pass)) {
//             console.log(pass, ' is lower')
//             isHasLower = true
//         } else if (upper.includes(pass)) {
//             console.log(pass, ' is upper')
//             isHasUpper = true
//         } else if (digit.includes(pass)) {
//             console.log(pass, ' is digit')
//             isHasDigit = true
//         } else if (special.includes(pass)) {
//             console.log(pass, ' is special')
//             isHasSpecial = true
//         }
//     })
//     console.log('conditions ', isHas8char && isHasLower && isHasUpper && isHasDigit && isHasSpecial)
//     if (isHas8char && isHasLower && isHasUpper && isHasDigit && isHasSpecial) return true
//     else return false
//     // return isHas8char && isHasLower && isHasUpper && isHasDigit && isHasSpecial
// }

function validatePassword(password) {
<<<<<<< HEAD
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
=======
    if (password == null || password == undefined) return false
    const passwords = Array.from(password)

    let isHas8char = password.length >= 8
    let isHasLower = passwords.some((pass) => 'abcdefghijklmnopqrstuvwxyz'.includes(pass))
    let isHasUpper = passwords.some((pass) => 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().includes(pass))
    let isHasDigit = passwords.some((pass) => '0123456789'.includes(pass))
    let isHasSpecial = passwords.some((pass) => '@#%$^&*!'.includes(pass))

    return isHas8char && isHasLower && isHasUpper && isHasDigit && isHasSpecial
>>>>>>> 27b306ee506a449af2b6e59e13318b4dfe26df03
}

// Test case
console.log(validatePassword('Zky543#@')) // Expected output: true
console.log(validatePassword('1234abcd')) // Expected output: false
console.log(validatePassword('hvhcfgcbgvgvhgc')) // Expected output: false
