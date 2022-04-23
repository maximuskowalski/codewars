function arr2bin(arr){

    let newArr = arr.filter( x => typeof x === 'number')

    let total = newArr.reduce(
        ( pValue, cValue ) => pValue + cValue,
        0
      )

    console.log( Number(total).toString(2) )
    return Number(total).toString(2)

  }

  // function tests
arr2bin([1,2])  //  "11")
arr2bin([1,2,3,4,5])  //  "1111")
arr2bin([1,10,100,1000])  //  "10001010111")
arr2bin([null])  //  "0")
arr2bin([true,true,false,15])  // "1111")

