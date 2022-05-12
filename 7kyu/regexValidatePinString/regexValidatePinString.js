function validatePIN (pin) {

    if( pin.length !== 4 && pin.length !== 6 ){
        console.log('length false')
        return false
    }

    if(/^\d+$/.test(pin)){
        console.log('digits true')
        return true
    }

    console.log(false)
    return false
}

// function tests

validatePIN("1234")  // -->  true
validatePIN("12345") // -->  false
validatePIN("a234")  // -->  false

//Wrong output for '1234': expected false to equal true
