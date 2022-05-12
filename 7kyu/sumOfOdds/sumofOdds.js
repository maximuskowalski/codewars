function rowSumOddNumbers(n) {

    let firstNum = (n * n) - (n - 1)

    let sum = firstNum

    for (let i = 1; i < n; i++){
        sum += firstNum + i*2
    }

    console.log(sum)
    return sum
}

rowSumOddNumbers(1)// -->  1
rowSumOddNumbers(2)// --> 3 + 5 = 8
rowSumOddNumbers(42)//, 74088)

//1 // 1
//2 // 3     5
//3 // 7     9    11
//4 // 13    15    17    19
//5 // 21    23    25    27    29

// row n has n number of digits
// first digit = (n * n) - (n - 1).
// n digits in increments of 2
