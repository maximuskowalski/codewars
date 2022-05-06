function slope(points){

    if( ( points[2] - points[0] ) == 0 ) console.log('undefined')

    if( ( points[2] - points[0] ) == 0 ) return 'undefined'

    let gradient = ( points[3] - points[1] ) / ( points[2] - points[0] ) + ''

    console.log(gradient)
    return gradient
}



// m = (y2 - y1) / (x2 - x1)

// function tests
slope([19,3,20,3])  //   "0" );
slope([2,7,4,-7])  //   "-7" );
slope([10,50,30,150])  //   "5" );
slope([15,45,12,60])  //   "-5" );
slope([10,20,20,80])  //   "6" );
slope([-10,6,-10,3])  //   "undefined" );
slope([ 15, -3, 15, -3 ]) // undefined
slope([ 12, -18, -15, -18 ])  // 0
