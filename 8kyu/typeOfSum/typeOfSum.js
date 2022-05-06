function typeOfSum(a, b) {
    let c = a + b
    console.log(typeof c)
    return typeof c
  }



// function tests

typeOfSum(12, 1)  // , 'number');
typeOfSum('d', 1)  // , 'string');
typeOfSum(1, 'a')  // , 'string');
typeOfSum('dd', '')  // , 'string');
typeOfSum(true, 1)  // , 'number');
typeOfSum('s', false)  // , 'string');
typeOfSum(null, 1)  // , 'number');
typeOfSum('s', null)  // , 'string');
typeOfSum(null, undefined)  // , 'number');
typeOfSum(undefined, 're')  // , 'string');
typeOfSum(undefined, true)  // , 'number');
typeOfSum(null, false)  // , 'number');
