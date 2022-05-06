function whatNumberIsIt(n){

    let num = Number(n);
    console.log(num)
    let phrase = `Input number is Number.`

    if(num == 'Infinity' ){
        console.log(`${phrase}POSITIVE_INFINITY`)
        return `${phrase}POSITIVE_INFINITY`
    }else if(num == '-Infinity' ){
        console.log(`${phrase}NEGATIVE_INFINITY`)
        return `${phrase}NEGATIVE_INFINITY`
    }else if(num == '1.7976931348623157e+308' ){
        console.log(`${phrase}MAX_VALUE`)
        return `${phrase}MAX_VALUE`
    }else if(num == '5e-324' ){
        console.log(`${phrase}MIN_VALUE`)
        return `${phrase}MIN_VALUE`
    }else if( isNaN(num) ){
        console.log(`${phrase}NaN`)
        return `${phrase}NaN`
    }else{
        console.log(`Input number is ${num}`)
        return `Input number is ${num}`
    }

}

// function tests

whatNumberIsIt(1/0)  // ,"Input number is Number.POSITIVE_INFINITY");
whatNumberIsIt(100)  // ,"Input number is 100");
whatNumberIsIt(1.7976931348623157e+308)  // ,"Input number is Number.MAX_VALUE");
whatNumberIsIt(5e-324)  // ,"Input number is Number.MIN_VALUE");
whatNumberIsIt(-Number.MAX_VALUE*2)  // ,"Input number is Number.NEGATIVE_INFINITY");
whatNumberIsIt(NaN)  // ,"Input number is Number.NaN");
whatNumberIsIt(Infinity+1)  // ,"Input number is Number.POSITIVE_INFINITY")
