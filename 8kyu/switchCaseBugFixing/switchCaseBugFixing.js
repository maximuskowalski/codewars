function evalObject(value){
    let result = 0;
    switch(value.operation){
      case'+':
       result = value.a + value.b;
       break
      case'-':
       result = value.a - value.b;
       break
      case'/':
       result = value.a / value.b;
       break
      case'*':
       result = value.a * value.b;
        break
       case'%':
       result = value.a % value.b;
       break
      case'^':
       result = Math.pow(value.a, value.b);
       break
    }
    console.log(result)
    return result;
}

// FUNCTION TESTS

evalObject({a:1,b:1,operation:'+'})  //  2,
evalObject({a:1,b:1,operation:'-'})  //  0,
evalObject({a:1,b:1,operation:'/'})  //  1,
evalObject({a:1,b:1,operation:'*'})  //  1,
evalObject({a:1,b:1,operation:'%'})  //  0,
evalObject({a:1,b:1,operation:'^'})  //  1,

