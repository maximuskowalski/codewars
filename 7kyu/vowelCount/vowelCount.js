function getCount(str) {
    // let vowelsCount = 0;

    console.log( (str.match(/a|e|i|o|u/g) || []).length )

    return (str.match(/a|e|i|o|u/g) || []).length

}

// function tests

getCount("abracadabra") // , 5)
