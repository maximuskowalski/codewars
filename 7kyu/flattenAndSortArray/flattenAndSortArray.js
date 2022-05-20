"use strict";

function flattenAndSort(array) {

    // let newArr = array.flat()

    let newArr = [].concat(...array)

    newArr.sort((a, b) => a - b)

    console.log(newArr)
    return newArr;
}

// function tests

flattenAndSort([])//, []);
flattenAndSort([[], []])//, []);
flattenAndSort([[], [1]])//, [1]);
flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])//, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])//, [1, 2, 3, 4, 5, 6, 100]);
