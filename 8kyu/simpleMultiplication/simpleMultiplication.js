function simpleMultiplication(number) {
    console.log( (number % 2 === 0) ? number * 8 : number * 9)
    return (number % 2 === 0) ? number * 8 : number * 9
}


// function tests

simpleMultiplication(2)  // 16,'Should return double given argument..')
simpleMultiplication(1) // 9,'Should return double given argument..')
simpleMultiplication(8) // 64,'Should return given argument times eight...')
simpleMultiplication(4) // 32,'Should return given argument times eight...')
simpleMultiplication(5) // 45,'Should return given argument times nine...')
