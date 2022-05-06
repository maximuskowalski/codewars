function padIt(str,n){

    let i = 1

    while(i<=n ){
        if(i%2==0){
            str = str + '*'
        }else{
            str = '*' + str
        }
        i++
    }

    console.log(str)
    return str

}

// function tests

padIt("a",1) //"*a");
padIt("a",2) //"*a*");
padIt("a",3) //"**a*");
padIt("a",4) //"**a**");
padIt("a",5) //"***a**");
