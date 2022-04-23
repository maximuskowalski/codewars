function expressionMatter(a, b, c) {
    let newArr = []

    newArr.push( a * (b + c) )
    newArr.push( a * b * c )
    newArr.push( a + b * c )
    newArr.push( (a + b) * c )
    newArr.push( a + b + c )

    console.log( Math.max(...newArr) )
    return Math.max(...newArr)
  }

// function tests

// a * (b + c) = 5
// a * b * c = 6
// a + b * c = 7
// (a + b) * c = 9


expressionMatter(2, 1, 2)  //  6
expressionMatter(2, 1, 1)  //  4
expressionMatter(1, 1, 1)  //  3
expressionMatter(1, 2, 3)  //  9
expressionMatter(1, 3, 1)  //  5
expressionMatter(2, 2, 2)  //  8

expressionMatter(5, 1, 3)  //  20
expressionMatter(3, 5, 7)  //  105
expressionMatter(5, 6, 1)  //  35
expressionMatter(1, 6, 1)  //  8
expressionMatter(2, 6, 1)  //  14
expressionMatter(6, 7, 1)  //  48

expressionMatter(2, 10, 3)  //  60
expressionMatter(1, 8, 3)  //  27
expressionMatter(9, 7, 2)  //  126
expressionMatter(1, 1, 10)  //  20
expressionMatter(9, 1, 1)  //  18
expressionMatter(10, 5, 6)  //  300
expressionMatter(1, 10, 1)  //  12
