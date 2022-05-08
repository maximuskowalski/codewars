function periodIsLate(last, today, cycleLength){

    let lastTime = last.getTime()
    let nowTime = today.getTime()

    let daysBetween = (nowTime - lastTime)  / (1000*60*60*24)

    console.log(daysBetween)

    console.log(cycleLength)

    if(cycleLength > daysBetween) console.log(false)
    return (cycleLength >= daysBetween) ? false : true

}

// function tests

periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35) //false);

periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28) // true);

