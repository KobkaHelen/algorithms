function intersection(arr1, arr2) {
    let result = 0
    for (let i1 = 0; i1 < arr1.length; i1++) {
        for (let i2 = 0; i2 < arr2.length; i2++) {
            if (arr1[i1] == arr2[i2]) {
                result = result + 1
            }
        }
    }
    return result
}
console.log(intersection([3, 5, 7, 9], [3, 7, 15]))