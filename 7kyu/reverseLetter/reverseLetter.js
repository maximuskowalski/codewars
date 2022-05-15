function reverseLetter(str) {
    str = str.replace(/[^A-Za-z]/g, '')
    console.log(str)

    console.log(str.split('').reverse().join(''))
    return str.split('').reverse().join('')

}

// function tests
reverseLetter("krishan")//,"nahsirk")

reverseLetter("ultr53o?n")//,"nortlu")

reverseLetter("ab23c")//,"cba")

reverseLetter("krish21an")//,"nahsirk")
