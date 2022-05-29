function digPow(n, p){

    const arrOfDigits = Array.from( String(n), Number )

    const sum = arrOfDigits.reduce( ( acc, item, index ) => {
        return acc + Math.pow( item, index + p )}, 0)

    if ( sum % n === 0 ){
        console.log( sum / n )
        return sum / n;
    } else {
        console.log( -1 )
        return -1;
    }

}

// function tests

digPow(89, 1)// should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1)// should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2)// should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3)// should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
