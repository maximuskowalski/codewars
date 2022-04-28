function findMultiples(integer, limit) {

    let newArr = []

    for (let i = 1; i <= limit/integer; i++) {
        newArr.push(integer * i)

    }
    console.log(newArr)
    return newArr
}

// function tests
findMultiples(5, 25) // [5, 10, 15, 20, 25])
findMultiples(1, 2) // [1, 2])
findMultiples(5, 7) // [5])
findMultiples(4, 27) // [4, 8, 12, 16, 20, 24])
findMultiples(11, 54) // [11, 22, 33, 44])
