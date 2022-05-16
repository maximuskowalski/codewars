function sumDigits(number) {

    let newArr = String(Math.abs(number)).split("").map(Number)

    let total = newArr.reduce( ( acc, item ) => acc + item, 0 )
    console.log(total)
    return total

}

// function tests

sumDigits(10)//, 1);
sumDigits(99)//, 18);
sumDigits(-32)//, 5);
