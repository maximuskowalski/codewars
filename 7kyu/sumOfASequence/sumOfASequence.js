const sequenceSum = (begin, end, step) => {

    let sum = 0

    for( let i = begin ; i <= end ; i += step){
        sum += i
    }

    console.log(sum)
    return sum
}

// function tests

sequenceSum(2, 6, 2)//, 12)
sequenceSum(1, 5, 1)//, 15)
sequenceSum(1, 5, 3)//, 5)
