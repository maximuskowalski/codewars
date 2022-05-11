function descendingOrder(n){
    let newNum = String(n).split('').sort((a, b) => b - a).join('')
    console.log(newNum)
    return newNum
}

// function tests
descendingOrder(0) //, 0)
descendingOrder(1) //, 1)
descendingOrder(111) //, 111)
descendingOrder(15) //, 51)
descendingOrder(1021) //, 2110)
descendingOrder(123456789) //, 987654321)
