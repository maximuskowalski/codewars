function generateRange(min, max, step){

    let array = []

    for (let i = min; i <= max ; i+=step ) {
        array.push(i)
    }

    console.log(array)
    return array

}

// function tests

generateRange(2, 10, 2) // [2,4,6,8,10]
