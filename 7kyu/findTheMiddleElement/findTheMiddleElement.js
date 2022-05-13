function gimme (triplet) {

    let newArr = triplet.map( (x) => x )
    newArr.sort( (a,b) => a - b )

    console.log(triplet.indexOf(newArr[1]))
    return triplet.indexOf(newArr[1])

}

//function tests

gimme([2, 3, 1])// => 0
gimme([5, 10, 14])// => 1
