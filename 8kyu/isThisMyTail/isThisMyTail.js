function correctTail(body, tail){

    let sub = body[ body.length-tail.length]

    if(sub == tail){
        console.log(true)
        return true
    }else{
        console.log(false)
        return false
    }
    }

// function tests

correctTail("Fox", "x")// true);
correctTail("Rhino", "o")// true);
correctTail("Meerkat", "t")// true);
