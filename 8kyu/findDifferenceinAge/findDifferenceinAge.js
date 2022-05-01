function differenceInAges(ages){
    let newArr = []

    newArr.push( Math.min(...ages) )
    newArr.push( Math.max(...ages) )

    newArr.push( newArr[1] - newArr[0] )

    console.log(newArr)

    return newArr

}

// function tests

differenceInAges([82, 15, 6, 38, 35]) //[6, 82, 76]);
differenceInAges([57, 99, 14, 32]) // [14, 99, 85]);
