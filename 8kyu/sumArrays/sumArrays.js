// Sum Numbers
function sum (numbers) {
    "use strict";
    console.log( numbers.reduce( ( previousValue, currentValue ) => previousValue + currentValue,
    0 ) )

    return numbers.reduce( ( previousValue, currentValue ) => previousValue + currentValue,
    0 )

};


// Function Tests

sum([])  // 0)
sum([1, 5.2, 4, 0, -1])  // 9.2)
