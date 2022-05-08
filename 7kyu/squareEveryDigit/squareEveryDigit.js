function squareDigits(num){
    let newArr = String(num).split("").map(Number)

    console.log(newArr)

    let sum = ''

    newArr.forEach(function(x) {
        sum += x**2 + ''
        },)

    console.log(+sum)
    return(+sum)
}

// function tests

squareDigits(3212) // , 9414);

squareDigits(2112) // , 4114);

squareDigits(0) // , 0);
