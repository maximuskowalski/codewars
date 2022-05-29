function moveZeros(arr) {

    let newArr = arr.filter(function(item) {
        return item !== 0
    })

    arr.forEach( ( element, index ) => {
        if( element === 0 ){
            newArr.push(0)
        }
    })

    console.log(newArr)
    return newArr
}

// function tests

moveZeros([1,2,0,1,0,1,0,3,0,1])//, [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);

moveZeros([
    9, 0, 0, 9, 1, 2, 0,
    1, 0, 1, 0, 3, 0, 1,
    9, 0, 0, 0, 0, 9
  ])

