function divisibleBy(numbers, divisor){

    let newArr = []

    for (let i = 0; i < numbers.length; i++) {
        if( numbers[i]%divisor === 0 ){
            newArr.push(numbers[i])
        }
    }
    console.log(newArr)
    return newArr

}

// function tests

divisibleBy([1,2,3,4,5,6], 2) // [2,4,6]);
divisibleBy([1,2,3,4,5,6], 3) // [3,6]);
divisibleBy([0,1,2,3,4,5,6], 4) // [0,4]);
divisibleBy([0], 4) // [0]);
divisibleBy([1,3,5], 2) // []);
