function factorial(n){
    if(n < 0 || n > 12){
        throw RangeError
    }

    if(n == 0) return 1

    let factorial = n

    for(let i = n - 1 ; i > 0 ; i--){
        factorial *= i
    }

    console.log(factorial)
    return(factorial)

}

// function tests
factorial(0)//, 1, "factorial for 0 is 1");
factorial(1)//, 1, "factorial for 1 is 1");
factorial(2)//, 2, "factorial for 2 is 2");
factorial(3)//, 6, "factorial for 3 is 6");

// 5! = 5 * 4 * 3 * 2 * 1 = 120
