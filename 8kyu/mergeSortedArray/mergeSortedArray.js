function mergeArrays(arr1, arr2) {
    const newArr = [...arr1, ...arr2]

    let uniqueArr = [...new Set(newArr)]

    uniqueArr.sort((a, b) => a - b)

    console.log(uniqueArr)
    return uniqueArr


}

// function tests

mergeArrays([1,2,3,4], [5,6,7,8]) //  [1,2,3,4,5,6,7,8]
mergeArrays([1,3,5,7,9], [10,8,6,4,2]) // [1,2,3,4,5,6,7,8,9,10]
mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]) // [1,2,3,4,5,7,9,10,11,12]
