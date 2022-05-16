var capitals = function (word) {
    let newArr = []

    for(let i = 0 ; i < word.length ; i++)
    if ( word[i] == word[i].toUpperCase() ){
        newArr.push(i)
    }

    console.log(newArr)
    return newArr
}

// function tests

capitals('CodEWaRs') // [0,3,4,6] );
