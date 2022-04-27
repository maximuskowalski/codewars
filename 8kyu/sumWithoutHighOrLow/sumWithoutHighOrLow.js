function sumArray(array) {
    if (array === null || array === undefined) return 0

    array.sort((a, b) => a - b);
    array.shift()
    array.pop()

    console.log( array.reduce( ( acc, item ) => acc + item, 0 ) )
    return array.reduce( ( acc, item ) => acc + item, 0 )

}


// function tests

sumArray(null)                 //  0 );
sumArray([ ])                  //  0 );
sumArray([ 3 ])                //  0 );
sumArray([ 3, 5 ])             //  0 );
sumArray([ 6, 2, 1, 8, 10 ])   //  16 );
sumArray([ 0, 1, 6, 10, 10 ])  //  17 );
sumArray([ -6, -20, -1, -10, -12 ]) // -28 );
sumArray([ -6, 20, -1, 10, -12 ])  // 3 );
