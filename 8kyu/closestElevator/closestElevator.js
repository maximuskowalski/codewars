function elevator(left, right, call){

    let leftDiff = Math.abs(call - left)
    let rightDiff = Math.abs(call - right)

    console.log(( leftDiff < rightDiff ) ? 'left' : 'right')

    return ( leftDiff < rightDiff ) ? 'left' : 'right'

}

// function tests

elevator(0,1,0) //, 'left');
elevator(0,1,1) //, 'right');
elevator(0,1,2) // , 'right');
elevator(0,0,0)  // , 'right');
elevator(0,2,1)  // , 'right');
