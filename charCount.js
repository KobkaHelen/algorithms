function charCount(str, char) {
    let result = 0 // к-во вхождений символа
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            result = result + 1
        }
    }
    return result
}
console.log(charCount("afgahi", "a"))