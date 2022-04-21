function sumOfDifferences(arr) {
    arr.sort((a, b) => b -a)
    console.log(arr)

    let sum = 0

    for (let i = 0; i < (arr.length - 1); i++) {
        sum += arr[i] - arr[i + 1]
    }

    console.log(sum)
    return sum

}


// function tests

sumOfDifferences([1, 2, 10]) // 9

sumOfDifferences([-3, -2, -1]) //  2
