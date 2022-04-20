function squareOrSquareRoot(array) {

    const squareNot = []

    for(let i = 0; i <array.length; i++) {
        if( Number.isInteger( Math.sqrt(array[i]) ) ) {
            squareNot.push(Math.sqrt(array[i]))
        }else{
            squareNot.push(array[i]**2);
        }
    }
    console.log(squareNot)
    return squareNot
}

// function tests

var input1 = [ 4, 3, 9, 7, 2, 1 ];
var expected = [ 2, 9, 3, 49, 4, 1 ];
squareOrSquareRoot(input1)

input2 = [ 100, 101, 5, 5, 1, 1 ];
expected = [ 10, 10201, 25, 25, 1, 1 ];
squareOrSquareRoot(input2)

input3 = [ 1, 2, 3, 4, 5, 6 ];
expected = [ 1, 4, 9, 2, 25, 36 ];
squareOrSquareRoot(input3)
