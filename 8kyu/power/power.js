function numberToPower(number, power){

    let sum = 1

    for(let i =1; i <= power; i++){
        sum *= number
    }

    console.log(sum)
    return sum

}

//
// Note: Math.pow and some other Math functions like eval() and ** are disabled.

// function tests

numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
