var countBits = function(n) {

    let binNum = n.toString(2)
    console.log(binNum)

    console.log( (binNum.match(/1/g) || []).length )
    return (binNum.match(/1/g) || []).length

}

countBits(0)// , 0);
countBits(4)// , 1);
countBits(7)// , 3);
countBits(9)// , 2);
countBits(10)// , 2);
countBits(1234)// , 5);

// console.log('10011010010'.length)
