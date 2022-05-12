function addBinary(a,b) {
    console.log( (a + b).toString(2) )
    return (a + b).toString(2)

}

// function tests
addBinary(1,2) // 11

addBinary(1, 1) // --> "10" (1 + 1 = 2 in decimal or 10 in binary)
addBinary(5, 9) // --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
