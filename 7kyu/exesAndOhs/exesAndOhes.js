function XO(str) {

    str = str.toLowerCase()

    let sumX = 0
    let sumO = 0

    for (let i = 0; i < str.length; i++) {

        if (str[i] == 'x') {
            sumX ++
        }

        if (str[i] == 'o') {
            sumO ++
        }
    }

    (sumX === sumO) ? console.log('true') : console.log('false')
    return sumX === sumO

}

// function tests

XO('xo')// ,true);
XO("xxOo")// ,true);
XO("xxxm")// ,false);
XO("Oo")// ,false);
XO("ooom")// ,false);
