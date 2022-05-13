function getDivisorsCnt(n){

    let sum = 1

    for(let i = 1 ; i <= n/2 ; i++){
        if( n % i === 0 ){
            sum += 1
        }
    }

    console.log(sum)
    return sum

}

// function tests

getDivisorsCnt(1)// , 1);
getDivisorsCnt(10)// , 4);
getDivisorsCnt(11)// , 2);
getDivisorsCnt(54)// , 8);

// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
