function getRealFloor(n) {

    let floor

    if(n === 0) {
        floor = 0
    }else if( n < 0 ){
        floor = n
    }else if( n < 14 ){
        floor = n -1
    }else{
        floor = n -2
    }

    console.log(floor)
    return floor

}


// function tests

getRealFloor(1)  // 0
getRealFloor(5)  // 4
getRealFloor(15)  // 13
