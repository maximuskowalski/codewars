function mango(quantity, price){

    let pairs = Math.floor(quantity/3)
    console.log( (pairs *2 + quantity%3 ) * price )

}

// function tests

mango(3, 3) /// ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) // ==> 30
mango(2, 3) // 6
mango(7, 3) // 15
mango(31,11) // 231

