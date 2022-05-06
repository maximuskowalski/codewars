function colorOf(r,g,b){

    if( (r.toString(16)).length === 1){
        r = (r.toString(16)).padStart(2, '0')
    }else{
        r = (r.toString(16))
    }

    if( (g.toString(16)).length === 1){
        g = (g.toString(16)).padStart(2, '0')
    }else{
        g = (g.toString(16))
    }

    if( (b.toString(16)).length === 1){
        b = (b.toString(16)).padStart(2, '0')
    }else{
        b = (b.toString(16))
    }

    let newString = '#' + r + g + b

    console.log(newString)
    return newString

}

//function tests

colorOf(255,0,0)// "#ff0000");
    //showColor("#ff0000")
colorOf(0,111,0)//, "#006f00");
   //// showColor("#006f00")
colorOf(1, 2 ,3)//, "#010203");
   // showColor("#010203")
