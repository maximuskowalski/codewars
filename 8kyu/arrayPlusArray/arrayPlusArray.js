function arrayPlusArray(arr1, arr2) {
    let sumOne = arr1.reduce( ( previousValue, currentValue ) => previousValue + currentValue,
    0 )
    let sumTwo = arr2.reduce( ( previousValue, currentValue ) => previousValue + currentValue,
    0 )
    console.log( sumOne + sumTwo )
    return ( sumOne + sumTwo )

  }


// Function Tests

arrayPlusArray([1, 2, 3], [4, 5, 6])   //   21
arrayPlusArray([-1, -2, -3], [-4, -5, -6])   //   -21
arrayPlusArray([0, 0, 0], [4, 5, 6])   //   15
arrayPlusArray([100, 200, 300], [400, 500, 600])   //   2100
