function divisors(integer) {

    let newArr = []

    for(let i = 2 ; i < integer; i++){
        if( integer % i === 0 ){
            newArr.push(i)
        }
    }

    console.log(newArr.length)

    if( newArr.length === 0){
        console.log(`${integer} is prime`)
        return `${integer} is prime`
    }else{
        console.log(newArr)
        return newArr
    }

}

// function tests
divisors(15) //, [3, 5]);
divisors(12) //, [2, 3, 4, 6]);
divisors(13) //, "13 is prime");
