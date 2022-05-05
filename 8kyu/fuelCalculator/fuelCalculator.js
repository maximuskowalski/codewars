function fuelPrice(litres, pricePerLitre) {

    let discPrice = 0

    if(litres >= 10){
        discPrice = pricePerLitre - 0.25
    }else if(litres >= 8){
        discPrice = pricePerLitre - 0.20
    }else if(litres >= 6){
        discPrice = pricePerLitre - 0.15
    }else if(litres >= 4){
        discPrice = pricePerLitre - 0.10
    }else if(litres >= 2){
        discPrice = pricePerLitre - 0.05
    }else{
        discPrice = pricePerLitre
    }

    let price = (litres * discPrice).toFixed(2)

    console.log( +price )
    return +price

}

// 2 or more litres get a discount of 5 cents per litre,

// 4 or more litres get a discount of 10 cents per litre,

// 6 15 cents

// 8 20 cents

// 10 25 cents

// maximum discount of 25 cents per litre.

// rounded to 2 decimal places.


// function tests

fuelPrice(5, 1.23)//  5.65);
fuelPrice(8, 2.5) // 18.40);
fuelPrice(5, 5.6) // 27.50);
