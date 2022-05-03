function closeCompare(a, b, margin){
    if( margin == undefined ) margin = 0
    console.log(margin)

    let difference = Math.abs(a - b)
    console.log(difference)

    console.log( ( margin >= difference ) ? 0 : ( a > b) ? 1 : -1 )
    return ( margin >= difference ) ? 0 : ( a > b) ? 1 : -1

}


// a is considered "close to" b if margin is greater than or equal to the distance between a and b.


// When a is close to b, return 0.
// Otherwise...

// When a is less than b, return -1.

// When a is greater than b, return 1.

// If margin is not given, treat it as zero.


// function tests

closeCompare(4, 5) // -1)
closeCompare(5, 5) // 0)
closeCompare(6, 5)// 1)
closeCompare(-6, -5) // -1)

closeCompare(2, 5, 3) // 0)
closeCompare(8.1, 5, 3) // 1)
closeCompare(1.99, 5, 3) // -1)
closeCompare(4, 5) // -1)
closeCompare(5, 5) // 0)
closeCompare(6, 5) // 1)
closeCompare(-6, -5) // -1)

closeCompare(2, 5, 3) // 0)
closeCompare(8.1, 5, 3) // 1)
closeCompare(1.99, 5, 3) // -1)
