function add(a, b){
    (a == b) ? console.log(true) : console.log(false)
    if(a == b){
        return true
    }else{
        return false
    }
}

// function tests

add('1', 1)  //  true);
add(1, '1')  //  true);
add(1, '0')  //  false);
add('11', 11)  //  true);
add(12, 12)  //  true);
add(120, '021')  //  false);
