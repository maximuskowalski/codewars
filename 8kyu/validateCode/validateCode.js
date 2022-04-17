function validateCode (code) {
    code += ""

    if (code.startsWith(1) || code.startsWith(2) || code.startsWith(3)){
        console.log(true)
        return true
    }else{
        console.log(false)
        return false
    }
}


    // Function Tests

validateCode(123)    //     true
validateCode(248)   //     true
validateCode(8)   //     false
validateCode(321)    //     true
validateCode(9453)    //     false
