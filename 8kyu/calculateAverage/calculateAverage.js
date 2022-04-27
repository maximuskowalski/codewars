function find_average(array) {

    let total = array.reduce(
        ( acc, item ) => acc + item,
        0
      )

    if(array.length === 0){
        return 0
    }else{
    console.log(total/array.length)
    return total/array.length
    }
}

// function tests

find_average([1,1,1])  //  1
find_average([1,2,3])  //  2
find_average([1,2,3,4])  //  2.5
find_average([]) // 0
