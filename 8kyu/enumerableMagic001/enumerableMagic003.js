function all( arr, fun ){
    console.log(arr)
    console.log(fun)

    if(arr.length == 0) return true

    for(let i = 0; i < arr.length; i++) {
      if(!fun(arr[i])) {
        return false;
      }
    }
    return true;
}


// method every
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const all = ( arr, fun ) => arr.every( fun );
