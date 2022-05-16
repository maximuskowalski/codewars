function inAscOrder(arr) {

    let test= 0

    for ( let i = 0 ; i < arr.length ; i++ ){
        if( arr[i] < test ){
            console.log(false)
            return false
        }else{
            test = arr[i]
        }
    }
    console.log(true)
    return true
}

// function tests

inAscOrder([1, 2, 4, 7, 19]) //, 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');

inAscOrder([1, 2, 3, 4, 5]) //, 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');

inAscOrder([1, 6, 10, 18, 2, 4, 20]) //, 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');

inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]) //, 'The list of numbers "9, 8, 7, 6, 5,
