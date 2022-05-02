function saleHotdogs(n){

    if( n < 5) {
        console.log(n * 100)
        return n * 100
    }else if( n >= 5 && n < 10 ){
        console.log(n * 95)
        return n * 95
    }else{
        console.log(n * 90)
        return n * 90
    }
}

// function tests

saleHotdogs(1)  //  100
saleHotdogs(4)  //  400
saleHotdogs(5)  //  475
saleHotdogs(9)  //  855
saleHotdogs(10)  //  900
saleHotdogs(100)  //  9000
