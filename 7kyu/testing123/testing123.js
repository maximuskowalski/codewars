var number=function(array){

    let newArr = []

    for(let i = 1; i <= array.length; i++){
        let pair = `${i}: ${array[i-1]}`
        newArr.push(pair)
    }

    console.log(newArr)
    return newArr

}

// function tests

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
