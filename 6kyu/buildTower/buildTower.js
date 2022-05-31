function towerBuilder(nFloors) {

    let newArr = []
    let spaces = nFloors - 1
    let airGaps = " "
    let stars = "*"
    //nFloors = the iteration of odd numbers

    for( let i = 1; i < nFloors * 2; i++ ) {
        if( i % 2 !== 0 ) {
            airGaps = " ".repeat(spaces)
            stars = "*".repeat(i)
            newArr.push(`${airGaps}${stars}${airGaps}`)
            spaces -= 1
        }
    }

    console.log(newArr)
    return newArr

}

// function tests

towerBuilder(1)//, ["*"]);
towerBuilder(2)//, [" * ","***"]);
towerBuilder(3)//, ["  *  "," *** ","*****"]);
