function first(arr, n) {

    let x = (n === undefined) ? 1 : n;

    x = ( n > arr.length ) ? arr.length : x

    let newArr = []

    for(let i = 0; i < x ; i++){
        newArr.push(arr[i])
    }
    console.log(newArr)
    return newArr

  }

// function tests

var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) // ['a']
first(arr, 2) // ['a', 'b']
first(arr, 15) // ['a', 'b'...]
