function narcissistic(value) {

    // let array = String(value).split("").map(Number)
    let array = Array.from(String(value), Number)

    let power = array.length

    let sum = 0

    array.forEach(function(x) {
        sum += x**power
        },)

    console.log(value == sum)

    return value == sum

}

// function tests

narcissistic( 7 )//, true, "7 is narcissistic" );

narcissistic( 371 )//, true, "371 is narcissistic" );

narcissistic( 153 ) //  True   1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
narcissistic( 1652 ) //     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
