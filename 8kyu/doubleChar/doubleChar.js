function doubleChar(str) {

    let newArr = []

    for(let i = 0; i < str.length; i++){
        let pusher=(str.charAt(i) + (str.charAt(i)))
        newArr.push(pusher)
    }

    console.log(newArr.join(''))
    return newArr.join('')
}

// function tests

// string.charAt(index);

doubleChar("abcd") // "aabbccdd");
doubleChar("Adidas") // "AAddiiddaass");
doubleChar("1337") // "11333377");
doubleChar("illuminati") // "iilllluummiinnaattii");
doubleChar("123456") // "112233445566");
doubleChar("%^&*(") // "%%^^&&**((");
