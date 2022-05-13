function arithmetic(a, b, operator){

    switch(operator){
        case 'add':
            console.log( a + b )
            return a + b
        case 'subtract':
            console.log( a - b )
            return a - b
        case 'multiply':
            console.log( a * b )
            return a * b
        case 'divide':
            console.log( a / b )
            return a / b
        default:
            console.log('invalid input')
            return 'invalid input'

    }

}

// function tests

arithmetic(1, 2, "add")//, 3, "'add' should return the two numbers added together!");
arithmetic(8, 2, "subtract")//, 6, "'subtract' should return a minus b!");
arithmetic(5, 2, "multiply")//, 10, "'multiply' should return a multiplied by b!");
arithmetic(8, 2, "divide")//, 4, "'divide' should return a divided by b!");
