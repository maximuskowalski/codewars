function highAndLow(numbers){

    let newArr = numbers.split(' ').map(function(item) {
        return Number(item)
    })

    let max = Math.max(...newArr)

    let min = Math.min(...newArr)

    console.log(`${max} ${min}`)
    return `${max} ${min}`

}

// function tests

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4") // "42 -9");

highAndLow("1 2 3") // "3 1");
