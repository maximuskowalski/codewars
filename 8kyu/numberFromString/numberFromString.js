function getNumberFromString(s) {
    s = s.replace(/\D/g, '');
    console.log(s)
    return Number(s)
  }


  // Function Tests

getNumberFromString("1")  //  1
getNumberFromString("123") // 123
getNumberFromString("this is number: 7")  // 7
getNumberFromString("hell5o wor6ld")  // 56
