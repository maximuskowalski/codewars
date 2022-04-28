function checkForFactor (base, factor) {
    return (base%factor === 0) ? true : false
}

// function tests

checkForFactor(10,2)  //  true)
checkForFactor(63,7)  //  true)
checkForFactor(2450,5)  //  true)
checkForFactor(24612,3)  //  true)

checkForFactor(9,2)  //  false)
checkForFactor(653,7)  //  false)
checkForFactor(2453,5)  //  false)
checkForFactor(24617,3)  //  false)
