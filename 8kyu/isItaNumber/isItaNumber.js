function isDigit(s) {
    if(s == ' ' || s == '' ) return false
    s = Number(s)
    return (s === s ) ? true : false

}

// function tests

isDigit("3")
isDigit("  3  ")
isDigit("-3.23")

isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
isDigit("s2324")
isDigit("3 4")
isDigit("3-4")
isDigit("3  4   ")
isDigit("34.65")
isDigit("-0")
