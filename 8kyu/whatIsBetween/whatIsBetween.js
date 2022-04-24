function between(a, b) {

    let array = []

    for(let i = a; i <= b; i++) {
        array.push(i)
    }
    console.log(array)
    return array
  }


// function tests

between(1, 4) // [1, 2, 3, 4]

between(-2, 2)  //  [-2, -1, 0, 1, 2]
