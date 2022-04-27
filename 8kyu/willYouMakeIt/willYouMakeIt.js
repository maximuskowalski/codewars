const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (fuelLeft * mpg >= distanceToPump)
};

// function tests

zeroFuel(50, 25, 2) // true);
zeroFuel(100, 50, 1) // false);
