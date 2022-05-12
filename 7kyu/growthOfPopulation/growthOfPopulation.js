function nbYear(p0, percent, aug, p) {

    let years = 0
    let population = p0

    for ( let i = 0 ; population < p ; i++){
        population = Math.floor(population + (population * (percent/100)) + aug)
        years++
    }

    console.log(years)
    // console.log(population)
    return years

}

nbYear(1500, 5, 100, 5000) //, 15);
nbYear(1500000, 2.5, 10000, 2000000) //, 10);
nbYear(1500000, 0.25, 1000, 2000000) //, 94);

nbYear(1000, 2,50, 1214) //4
nbYear(1500000, 0, 10000, 2000000) //50
