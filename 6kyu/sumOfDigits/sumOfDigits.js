function digital_root(n) {

    let newArr = String(n).split("").map(Number)

    if ( newArr.length === 1) {
        console.log(n)
        return n
    }

    while (newArr.length > 1) {
        let sum = 0

        for (let i = 0; i < newArr.length; i++){
            let e = Number(newArr[i])
            sum += e
        }
        newArr = sum.toString().split('')
    }

    console.log(newArr[0])
    return Number(newArr[0])

}


// function tests

digital_root(16) // , 7 )
digital_root(456) //, 6 )

digital_root(16)  //-->  1 + 6 = 7
digital_root(942)  //-->  9 + 4 + 2 = 15  -->  1 + 5 = 6
digital_root(132189)  //-->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
digital_root(493193)  //-->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
