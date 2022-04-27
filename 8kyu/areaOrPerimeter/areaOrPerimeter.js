const areaOrPerimeter = function(l , w) {
    console.log( ( l === w ) ? l * w : 2 * l + 2 * w )
    return ( l === w ) ? l * w : 2 * l + 2 * w
};

// function tests
// If it is a square, return its area.
// area = l * w
// If it is a rectangle, return its perimeter.
// perimeter = 2*l + 2*w

areaOrPerimeter(4 , 4)  // 16);
areaOrPerimeter(6 , 10)  // 32);

areaOrPerimeter(6, 10) // --> 32
areaOrPerimeter(3, 3)  // --> 9
