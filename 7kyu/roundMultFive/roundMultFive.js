function roundToNext5(n){

    for(let i = 0 ; n % 5 !== 0 ; i++){
        n += 1
    }

    console.log(n)
    return n
}

// function tests


roundToNext5(0) //    ->   0
roundToNext5(2) //    ->   5
roundToNext5(3) //    ->   5
roundToNext5(12) //   ->   15
roundToNext5(21 ) //  ->   25
roundToNext5(30) //   ->   30
roundToNext5(-2) //   ->   0
roundToNext5(-5) //   ->   -5
