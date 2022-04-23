function problem(x){

    if( typeof(x) !== 'number' ){
        console.log('Error')
        return 'Error'
    }else{
        console.log( x * 50 + 6)
        return x * 50 + 6
    }
}

// function tests

problem("hello")  //  "Error"
problem(1)  //  56
problem(5)  //  256
problem(0)  //  6
problem(1.2)  //  66
problem(3)  //  156
problem("RyanIsCool")  //  "Error"
problem(-3)  //  -144);
problem("")  //  "Error"
problem(0.03)  //  7.5
