// Дано две строки. Найти количнство вхождений второй строки в первую.

function quantityOfEntries(str1, str2) {
    let result = 0
    for (let i1 = 0; i1 < str1.length; i1++) {
        for (let i2 = 0; i2 < str2.length; i2++) {
            if (str1[i1 + i2] !== str2[i2]) {
                break
            }
            if (i2 == str2.length - 1) {
                result = result + 1
            }
        }
    }
    return result
}
console.log(quantityOfEntries("nice note and nice sm", "nice"))