function points(games) {

    let newArr = []

    for (let i = 0; i < games.length; i++) {
        let score1 = games[i].charAt(0)
        let score2 = games[i].charAt(2)
        if ( score1 > score2 ) {
            newArr.push(3)
        }else if ( score1 == score2 ) {
            newArr.push(1)
        }
    }

    let total = newArr.reduce(
        ( pValue, cValue ) => pValue + cValue,
        0
      )

    console.log( total )
    return total
  }

//   if x > y: 3 points
//   if x < y: 0 point
//   if x = y: 1 point


// function tests

points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])    //    30);

points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])    //    10);

points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])    //    0);

points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])    //    15);

points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"])    //    12);
