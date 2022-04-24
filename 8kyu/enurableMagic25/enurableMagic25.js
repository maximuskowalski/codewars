function take(arr, n) {
    console.log( arr.slice(0,n) )
    return arr.slice(0,n)
  }

// function tests

take([0, 1, 2, 3, 5, 8, 13], 3) // [0, 1, 2], "should return the first 3 items");
