snail = function(array) {

    // final arr to return
    let newArr = []

    let horizontalLength = array.length

    // console.log(array.length)
    // console.log(array[0].length)

    // until array is empty
    while (array.length) {
        // get first level in order
        newArr.push( ...array.shift() )

        // pop the last items in each element
        for( let i = 0; i < array.length; i++ ) {
            newArr.push( array[i].pop() )
        }

        // now get bottom row, but in reverse order
        newArr.push( ...(array.pop() || []).reverse() )

        //loop up left side and push 1st elements
        for( let i = array.length - 1; i >= 0; i--) {
            newArr.push( array[i].shift() )
        }
        // now loop again from top row
    }

    console.log(newArr)
    return newArr

}

// function tests

snail([[]])//, []);
snail([[1]])//, [1]);
snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])//, [1, 2, 3, 6, 9, 8, 7, 4, 5]);
snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])//, [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])//, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
