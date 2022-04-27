function cockroachSpeed(s) {
    return Math.floor(s/0.036)
}

// function tests

// km per hour and returns it in cm per second
// cm/s = km/h ÷ 0.036

cockroachSpeed(1.08)// 30);
cockroachSpeed(1.09) // 30);
cockroachSpeed(0) // 0);
