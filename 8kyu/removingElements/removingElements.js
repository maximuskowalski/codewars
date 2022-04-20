function removeEveryOther(arr){

    console.log(arr.filter( ( e, i ) => i % 2 == 0))
    return arr.filter( ( e, i ) => i % 2 == 0)

  }


// Function Tests

removeEveryOther(['Hello', 'Goodbye', 'Hello Again']) //['Hello', 'Hello Again']

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // [1, 3, 5, 7, 9]

removeEveryOther([[1, 2]]) //  [[1, 2]]

removeEveryOther([['Goodbye'], {'Great': 'Job'}])  //  [['Goodbye']]
