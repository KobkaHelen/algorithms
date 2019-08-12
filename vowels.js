/*
let str = 'Hello WORLD AA II'
function vowels(str) {
    let result = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' ||
            str[i] == 'A' ||
            str[i] == 'e' ||
            str[i] == 'E' ||
            str[i] == 'i' ||
            str[i] == 'I' ||
            str[i] == 'o' ||
            str[i] == 'O' ||
            str[i] == 'U' ||
            str[i] == 'u') {
            result = result + 1
        }
    }
    return result
}
console.log(vowels(str))
*/

let str = 'Hello WORLD AA II'

function vowels(str) {
    str = str.toLowerCase()
    
    let result = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' ||
            str[i] == 'e' ||
            str[i] == 'i' ||
            str[i] == 'o' ||
            str[i] == 'u') {
            result = result + 1
        }
    }
    return result
}
console.log(vowels(str))
