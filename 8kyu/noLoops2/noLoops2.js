function check(a,x){
    if ( a.indexOf(x) !== -1) {
        console.log(true)
        return true
    }else{
        console.log(false)
        return false
    }
}

// Function Tests

check([66, 101], 66)  //  ===>  true
check([80, 117, 115, 104, 45, 85, 112, 115], 45)  //  ===>  true
check(['t', 'e', 's', 't'], 'e')  //  ===>  true
check(['what', 'a', 'great', 'kata'], 'kat')  //  ===>  false
