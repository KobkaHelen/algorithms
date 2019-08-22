let str = 'A gKL Op'
function palindrome(str) {
    let first = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            first = first + str[i]
        }

    }
    first = first.toUpperCase()
    let second = ''
    for (let i = first.length - 1; i >= 0; i--) {
        second = second + first[i]
    }
    return first == second

}
console.log(palindrome(str))