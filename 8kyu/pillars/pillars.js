function pillars(num_pill, dist, width) {

    if(num_pill <= 1){
        console.log(0)
        return 0
    }else{
        console.log( ( (num_pill - 1) * dist * 100 ) + ( (num_pill - 2) * width ))
        return ( (num_pill - 1) * dist * 100 ) + ( (num_pill - 2) * width )

    }
}

//   number of pillars (≥ 1);
//   distance between pillars (10 - 30 meters);
//   width of the pillar (10 - 50 centimeters).
//   Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// function tests
pillars(1, 10, 10) // 0
pillars(2, 20, 25) // 2000
pillars(11, 15, 30) // 15270
