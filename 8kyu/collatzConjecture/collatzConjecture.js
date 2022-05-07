var hotpo = function(n){
    if(n == 0) return 0;

    let sum = 0

    for(let i = 1; n !== 1; i++){
        sum += 1;
        ( n % 2 == 0 ) ? (n = n / 2) : (n = 3*n + 1)
    }

    console.log(sum)
    return sum

}

hotpo(1) // 0);
hotpo(5) // 5);
hotpo(6) // 8);
hotpo(23) // 15);
