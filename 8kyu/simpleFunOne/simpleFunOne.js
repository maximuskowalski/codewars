function seatsInTheater(nCols, nRows, col, row) {
    console.log(( nCols - col + 1 ) * ( nRows - row ))
    return ( nCols - col + 1 ) * ( nRows - row )

  }

seatsInTheater(16,11,5,3)  //  96
seatsInTheater(1,1,1,1)  //  0
seatsInTheater(13,6,8,3)  //  18
seatsInTheater(60,100,60,1)  //  99
seatsInTheater(1000,1000,1000,1000)  //  0
