var uniqueInOrder=function(iterable){

    let newArr = []
    let uniqueArr = []

    if (typeof iterable == 'string'){
        newArr = iterable.split('')
    }else{
        newArr = iterable
    }


    for ( let i = 0 ; i < newArr.length ; i++ ){
        if(newArr[i] !== uniqueArr[uniqueArr.length -1]){
            uniqueArr.push(newArr[i])
        }
    }

    console.log( uniqueArr )
    return uniqueArr

}

// function tests

uniqueInOrder('AAAABBBCCDAABBB')//, ['A','B','C','D','A','B'])
uniqueInOrder('AAAABBBCCDAABBB') //== ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         //== ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])      // == [1,2,3]
