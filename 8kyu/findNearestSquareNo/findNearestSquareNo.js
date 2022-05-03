function nearestSq(n){
    let sqrt = Math.sqrt(n)
    console.log(sqrt)
    console.log(Math.round(sqrt))
    console.log(Math.round(sqrt)**2)
    return Math.round(sqrt)**2
}

// function tests

nearestSq(1) // 1)
nearestSq(2) //,1)
nearestSq(10) // ,9)
nearestSq(111) //,121)
nearestSq(9999) //,10000)
