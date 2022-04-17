function shortenToDate(longDate) {
    let arr = longDate.split(',')
    arr.pop()
    console.log(arr.join(''))
    return arr.join('')
  }


// Function Tests

shortenToDate("Friday May 2, 9am")    //     "Friday May 2"
shortenToDate("Tuesday January 29, 10pm")    //     "Tuesday January 29"
shortenToDate("Monday December 25, 10pm")    //     "Monday December 25"
