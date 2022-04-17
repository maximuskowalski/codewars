function array(arr){

    let newArr = arr.split(',')
    newArr.shift()
    newArr.pop()

    let string = newArr.join(' ')
    string = string.replace(/[,]/gi, '');

    if (string == '') {
        console.log(null)
        return null
    }else{
        console.log(string)
        return string
    }
}

// function tests

array('1,2,3')  // '2'
array('1,2,3,4')  // '2 3'
array('1,2,3,4,5')  // '2 3 4'

array('')  // null
array('1')  // null
array('1,2')  // null
