// Дано две строки. Необходимо найти количество общих символов.

// Объявляем функцию generalSymbol с вумя аргументами str1, str2.
function generalSymbol(str1, str2) {
    /* Далее объявляем константу arrayOfI2, присваиваем ей пустой массив (там будут храниться совпавшие индексы 
        второй строки). Длинна массива совпадений будет равна количеству общих символов */
    const arrayOfI2 = []
    // Создаем цикл для перебора каждого индекса элемента первой строки str1
    for (let i1 = 0; i1 < str1.length; i1++) {
        // Создаем цикл для перебора каждого индекса элемента второй строки str2
        for (let i2 = 0; i2 < str2.length; i2++) {
            /* Если элемент первой строки равен элементу второй строки, то приступаем к выполнению цикла
                по перебору элементов массива arrayOfI2 */
            if (str1[i1] == str2[i2]) {
                /* Объявляем переменную существует (имеется ввиду совпадения) и присваиваем ей значение false,
                    так как мы не знаем есть совпадения или нет */
                let exists = false
                /* Создаем цикл для массива совпадений,объявляем переменную i3, перебираем каждый элемент 
                    массива чтобы убедиться в том, что там нет совпадений. */
                for (let i3 = 0; i3 < arrayOfI2.length; i3++) {
                    /* Если  индекс второй строки  присутствует в массиве совпадений,
                         то не добавляем i2 в  arrayOfI2 */
                    if (arrayOfI2[i3] == i2) {
                        exists = true
                        break
                    }
                }
                // Если i2 не существует в массиве совпадений,
                if (exists == false) {
                    // то выполняем добавление i2 в arrayOfI2.
                    arrayOfI2.push(i2)
                    break
                }
            }

        }

    }
    // Результат работы функции равен длинне массива совпадений.
    return arrayOfI2.length
}
console.log(generalSymbol('hola', 'hello world'))
console.log(generalSymbol('hello world', 'hola'))

