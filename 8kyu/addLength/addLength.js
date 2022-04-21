function addLength(str) {

    const arr= str.split(' ')

    const newArr = arr.map( e => `${e} ${e.length}`)

    console.log(newArr)
    return(newArr)

}


// function tests

addLength('apple ban') // ["apple 5", "ban 3"]);
addLength('you will win') // ["you 3", "will 4", "win 3"]);
