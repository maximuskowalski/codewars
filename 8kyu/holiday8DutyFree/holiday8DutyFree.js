function dutyFree(normPrice, discount, hol){

    let price = (normPrice * (discount/100))
    console.log(Math.floor(hol/price))
    return Math.floor(hol/price)

}

// function tests

dutyFree(12, 50, 1000) // 166);
dutyFree(17, 10, 500) // 294);
dutyFree(24, 35, 3000) // 357);
