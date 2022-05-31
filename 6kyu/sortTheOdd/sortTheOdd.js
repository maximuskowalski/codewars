function sortArray(array) {

    // produce a new array of odd numbers sorted
    let oddArr = array.filter( ( e ) => e % 2 !== 0).sort((a, b) => a - b)

    let newArr = []

    // console.log(oddArr)

    // loop through and replace odd elements in original array with sorted odd elements

    for( let i = 0, j = 0; i < array.length; i++ ) {
        if( array[i]%2 === 0 ) {
            newArr.push(array[i])
        }else{
            newArr.push(oddArr[j])
            j++
        }
    }

    console.log(newArr)
    return newArr

}

// function tests

sortArray([5, 3, 2, 8, 1, 4])//, [1, 3, 2, 8, 5, 4]);
sortArray([5, 3, 1, 8, 0])//, [1, 3, 5, 8, 0]);
sortArray([])//,[]);
