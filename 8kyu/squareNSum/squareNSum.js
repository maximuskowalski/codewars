function squareSum(numbers) {

    let sum = 0

    numbers.forEach(function(x) {
        sum += x**2
        },)

    console.log(sum)
    return sum

}

// Function Tests

squareSum([1,2])    //    5)
squareSum([0, 3, 4, 5])    //    50)
squareSum([])    //    0)
squareSum([1, 2, 2])    //    9)

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
