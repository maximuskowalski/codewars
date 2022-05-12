function sumTwoSmallestNumbers(numbers) {

    numbers = numbers.filter(x => x > 0)
    numbers.sort((a, b) => a - b);

    console.log(numbers[0] + numbers[1])

    return numbers[0] + numbers[1]

}

// function tests
sumTwoSmallestNumbers([5, 8, 12, 19, 22]) // , 13 , "Sum should be 13");
sumTwoSmallestNumbers([15, 28, 4, 2, 43]) // , 6 , "Sum should be 6");
sumTwoSmallestNumbers([3, 87, 45, 12, 7]) // , 10 , "Sum should be 10");
sumTwoSmallestNumbers([23, 71, 33, 82, 1]) // , 24 , "Sum should be 24");
sumTwoSmallestNumbers([52, 76, 14, 12, 4]) // , 16 , "Sum should be 16");
sumTwoSmallestNumbers([52, 76, -7, 14, 12, -3, 4]) // , 16 , "Sum should be 16");
