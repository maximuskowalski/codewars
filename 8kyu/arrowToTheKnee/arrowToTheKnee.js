var ArrowFunc = function(arr) {

    const newArr = arr.map( e => String.fromCharCode(e) );
    console.log(newArr.join(''))
    return newArr.join('')

}


// function tests

// String.fromCharCode(97) // a

ArrowFunc([84,101,115,116])// 'Test', 'Convert those numbers to letters')
ArrowFunc([70,85,83,32,82,79,72,32,68,65,72])// 'FUS ROH DAH', 'Keep it up!')
