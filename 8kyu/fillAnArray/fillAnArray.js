function arr(n) {

    let myArr = []

    for (let i = 0; i < n; i++) {
        myArr.push(i)
    }

    console.log(myArr)
    return myArr


}

// function tests

arr() // []
arr(4) // [0,1,2,3]

arr(8) // [0,1,2,3...7]
arr(12) // [0,1,2,3...11]
