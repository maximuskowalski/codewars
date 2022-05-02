function sumMul(n,m){

    let sum = 0

    for (let i = 1; i*n < m; i++){
      sum += (i * n)
    }

    console.log(sum)
    return (sum===0)? 'INVALID':sum

  }

sumMul(0,0) // "INVALID");
sumMul(2,9) // 20);
sumMul(4,-7) //"INVALID");
sumMul(2, 9) //  ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13) // ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) // ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  // ==> "INVALID"
