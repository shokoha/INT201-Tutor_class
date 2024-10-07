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
    if (password == null || password == undefined) return false
    const passwords = Array.from(password)

    let isHas8char = password.length >= 8
    let isHasLower = passwords.some((pass) => 'abcdefghijklmnopqrstuvwxyz'.includes(pass))
    let isHasUpper = passwords.some((pass) => 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().includes(pass))
    let isHasDigit = passwords.some((pass) => '0123456789'.includes(pass))
    let isHasSpecial = passwords.some((pass) => '@#%$^&*!'.includes(pass))

    return isHas8char && isHasLower && isHasUpper && isHasDigit && isHasSpecial
}

// Test case
console.log(validatePassword('Zky543#@')) // Expected output: true
console.log(validatePassword('1234abcd')) // Expected output: false
console.log(validatePassword('hvhcfgcbgvgvhgc')) // Expected output: false
