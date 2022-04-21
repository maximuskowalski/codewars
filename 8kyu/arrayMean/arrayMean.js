var findAverage = function (nums) {

    let total = nums.reduce(
        ( pValue, cValue ) => pValue + cValue,0)

    console.log( total / nums.length)
    return total / nums.length;
  }

// function tests

findAverage([1]) // 1

findAverage([1, 3, 5, 7]) // 4
