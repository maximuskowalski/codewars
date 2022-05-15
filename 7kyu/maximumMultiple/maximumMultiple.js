function maxMultiple(divisor, bound){

    for ( let i = bound; i > divisor; i--){
        // console.log(i)
        if (i % divisor === 0){
            console.log(i)
            return +i
        }
    }
}

maxMultiple(2,7)//,6);
maxMultiple(3,10)//,9);
maxMultiple(7,17)//,14);
maxMultiple(10,50)//,50);
maxMultiple(37,200)//,185);
maxMultiple(7,100)//,98);
