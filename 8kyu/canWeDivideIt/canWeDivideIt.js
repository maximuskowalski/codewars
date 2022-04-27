function isDivideBy(number, a, b) {
    return ( number % a === 0 && number % b === 0 )
}

// function tests

isDivideBy(-12, 2, -6)  //  true);
isDivideBy(-12, 2, -5)  //  false);
isDivideBy(45, 1, 6)  //  false);
isDivideBy(45, 5, 15)  //  true);
isDivideBy(4, 1, 4)  //  true);
isDivideBy(15, -5, 3)  //  true);
