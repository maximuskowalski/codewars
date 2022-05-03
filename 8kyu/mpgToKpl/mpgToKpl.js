function converter (mpg) {
    console.log( +(mpg * 0.354006044).toFixed(2) )
    return +(mpg * 0.354006044).toFixed(2)
}



// 1 gal = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

// mpg = 1.609344 km / gal

// mpg = 1.609344 km / 4.54609188 litres
// mpg = 0.354006044 km/l


//Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres

converter(10) // 3.54)
converter(20) // 7.08)
converter(30) // 10.62)
