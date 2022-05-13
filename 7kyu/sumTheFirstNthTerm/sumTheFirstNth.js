function SeriesSum(n){

    if(n === 0) return `0.00`

    let sum = 1
    let val = 4

    for(let i = 1; i < n ; i++){
        sum += 1/val
        val += 3
    }

    console.log(sum.toFixed(2))
    return sum.toFixed(2)

}

// function tests
SeriesSum(1)//, "1.00")
SeriesSum(2)//, "1.25")
SeriesSum(3)//, "1.39")
SeriesSum(4)//, "1.49")
