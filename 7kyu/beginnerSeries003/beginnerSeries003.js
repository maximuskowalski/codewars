function getSum( a,b ) {

    if(a === b) return a

    let sum = 0
    let min = 0
    let max = 0

    if (a < b) min = a , max = b
    if (b < a) min = b , max = a

    for(let i = min ; i <= max ; i++){
        sum += i
    }

    console.log(sum)
    return(sum)

}

// function tests

getSum(0,-1) //,-1);
getSum(0, 1) // ,1);
getSum(1, 0) // --> 1 (1 + 0 = 1)
getSum(1, 2) // --> 3 (1 + 2 = 3)
getSum(0, 1) // --> 1 (0 + 1 = 1)
getSum(1, 1) // --> 1 (1 since both are same)
getSum(-1, 0) // --> -1 (-1 + 0 = -1)
getSum(-1, 2) // --> 2 (-1 + 0 + 1 + 2 = 2)
