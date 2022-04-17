function digitize(n) {
    let arr = Array.from(String(n), Number)
    console.log(arr.reverse())
    return arr.reverse()
}

// Reverse Function

digitize(35231)  // [1,3,2,5,3]
digitize(0)  // [0]
