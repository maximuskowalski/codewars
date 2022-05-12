String.prototype.toJadenCase = function () {

    let theString = this

    let newArr = theString.split(' ')

    for(let i = 0; i < newArr.length; i++){
        newArr[i] = newArr[i].slice(0,1).toUpperCase() + newArr[i].slice(1)
    }

    console.log(newArr.join(' '))
    return newArr.join(' ')

}

// function Tests

toJadenCase("How can mirrors be real if our eyes aren't real") // "How Can Mirrors Be Real If Our Eyes Aren't Real");

