var number = function(busStops){

    let total = 0

    for( let i = 0 ; i < busStops.length ; i++){
        total += busStops[i][0] - busStops[i][1]
    }

    console.log(total)
    return total

}




// function tests
number([[10,0],[3,5],[5,8]]) //, 5);
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) //, 17);
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) //, 21);
number([[0,0]]) //, 0);


// on = 10 + 3 + 5 = 18
// off = 0 + 5 + 8 = 13
// remainder = on - off = 5
