function multiply(number){

    const power = Math.abs(number).toString().length

    console.log(number * +(5**power))
    return number * +(5**power)

}

multiply(10) //250);
multiply(5) //25);
multiply(200) //,25000);
multiply(0) //,0);
multiply(-2) // ,-10);
