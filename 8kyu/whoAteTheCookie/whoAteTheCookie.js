function cookie(x){
    if(typeof x === 'string'){
        console.log('Who ate the last cookie? It was Zach!')
        return 'Who ate the last cookie? It was Zach!'
    }else if(typeof x === 'number'){
        console.log('Who ate the last cookie? It was Monica!')
        return 'Who ate the last cookie? It was Monica!'
    }else{
        console.log('Who ate the last cookie? It was the dog!')
        return 'Who ate the last cookie? It was the dog!'
    }
}

// function tests

cookie("Ryan") // "Who ate the last cookie? It was Zach!")
cookie(26) // "Who ate the last cookie? It was Monica!")
cookie(2.3) // "Who ate the last cookie? It was Monica!")
cookie(true) // "Who ate the last cookie? It was the dog!")
