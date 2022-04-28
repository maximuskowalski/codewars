function powersOfTwo(n){

    let newArr = [1]

    for (let i = 1; i <= n; i++) {
        newArr.push(2**i)
    }
    console.log(newArr)
    return newArr
}

// function tests
powersOfTwo(0) // [1])
powersOfTwo(1) // [1, 2])
powersOfTwo(4) // [1, 2, 4, 8, 16])
