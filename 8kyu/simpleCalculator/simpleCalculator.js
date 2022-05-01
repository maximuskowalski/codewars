function calculator(a,b,sign){

    let myArray = ['+', '-', '*', '/']

    if( isNaN(a) || isNaN(b) ) return 'unknown value'
    if(!myArray.includes(sign))  return 'unknown value'

    if(sign == '+'){
        console.log(a + b)
        return a + b
    }else if(sign == '-'){
        console.log(a - b)
        return a - b
    }else if(sign == '*'){
        console.log(a * b)
        return a * b
    }else{
        console.log(a / b)
        return a / b
    }

}

// function tests

calculator(1,2,"+") // 3, "calculate");
calculator(1,2,"-") // -1, "calculate");
calculator(3,5,"*") // 15, "calculate");
calculator(6,2,"/") // 3, "calculate");
calculator(6,2,"$") // "unknown value", "calculate");
calculator(6,"h","*") // "unknown value", "calculate");
