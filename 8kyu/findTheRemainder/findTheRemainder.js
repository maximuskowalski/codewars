function remainder(n, m){
    return (n > m ) ? n%m : m%n
}

// function tests
remainder(17,5) //, 2, 'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5');
remainder(13, 72),
remainder(72, 13)//, 'The order the arguments are passed should not matter');

remainder(1, 0)// 'Divide by zero should return NaN');
remainder(0, 0)//'Divide by zero should return NaN')
