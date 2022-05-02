function isDivisible(wallLength, pixelSize){
    return (wallLength%pixelSize === 0) ? true : false
}

// function tests

isDivisible(4050, 27) // true);

isDivisible(4066, 27) // false);

isDivisible(10000, 20) // true);

isDivisible(10005, 20) // false);

isDivisible(10005, 1) // true);
