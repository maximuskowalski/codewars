function pointsPer48(ppg, mpg) {

    if ( ppg == 0 ){
        return 0
    }
    console.log(Math.round (((ppg/mpg)*48) * 10) / 10)

    return Math.round (((ppg/mpg)*48) * 10) / 10

}

// function tests

pointsPer48(12, 20)  // 28.8)
pointsPer48(10, 10)  // 48.0)
pointsPer48(5, 17)  // 14.1)
pointsPer48(0, 0)  // 0)
pointsPer48(30.8, 34.7)  // 42.6)  // Russell Westbrook 1/15/17
pointsPer48(22.9, 33.8)  // 32.5)
