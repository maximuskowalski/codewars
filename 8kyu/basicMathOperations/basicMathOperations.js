function basicOp(operation, value1, value2){
    if(operation == '+'){
        console.log(value1 + value2)
        return value1 + value2
    }else if(operation == '-'){
        console.log(value1 - value2)
        return value1 - value2
    }else if(operation == '*'){
        console.log(value1 * value2)
        return value1 * value2
    }else{
        console.log(value1 / value2)
        return value1 / value2
    }
}

// function tests
basicOp('+', 4, 7)  //  11);
basicOp('-', 15, 18)  //  -3);
basicOp('*', 5, 5)  //  25);
basicOp('/', 49, 7)  //  7);
