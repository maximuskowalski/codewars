function nbDig(n, d) {

    let string = ''

    for(let i = 0 ; i <= n ; i++){
        string += i**2
    }

    console.log( (string.match(new RegExp(d, 'g')) || []).length )

    return (string.match(new RegExp(d, 'g')) || []).length

}

// function tests
nbDig(10, 1) // 4 "n = 10, d = 1
nbDig(25, 1) // returns 11 since
nbDig( 5750, 0) //,  4700, "n = 5750, d = 0");
nbDig(11011, 2)// ,  9481, "n = 11011, d = 2");
nbDig(12224, 8) //,  7733, "n = 12224, d = 8");
nbDig(11549, 1) //, 11905, "n = 11549, d = 1");
