var beeramid = function(bonus, price) {

    let beersMax = Math.floor(bonus/price)

    // console.log(beersMax)

    let layerNo = 0

    while ( beersMax >= layerNo ** 2 ) {
        beersMax -= ( layerNo ** 2 )
        layerNo += 1
    }

    console.log(layerNo -1)

    return ( layerNo <= 0 ) ? 0 : layerNo - 1

}

// function tests
// I couldn't figure out from the directions how the levels grew. I read it as "squared minus 1". It's actually 1^2, 2^2, 3^2, and so on.

beeramid(9, 2)//, 1);
beeramid(10, 2)//, 2);
beeramid(11, 2)//, 2);
beeramid(21, 1.5)//, 3);
beeramid(454, 5)//, 5);
beeramid(455, 5)//, 6);
beeramid(4, 4)//, 1);
beeramid(3, 4)//, 0);
beeramid(0, 4)//, 0);
beeramid(-1, 4)//, 0);
beeramid(1500, 2) // should === 12
beeramid(5000, 3) // should === 16
