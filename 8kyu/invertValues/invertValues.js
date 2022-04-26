function invert(array) {

    let newArr = []

    for (let i =0; i < array.length; i++){
        if(array[i]>=0){
            newArr.push(-Math.abs(array[i]))
        }else{
            newArr.push(Math.abs(array[i]))
        }
    }
    console.log(newArr)
    return newArr
}

// function tests

invert([1,2,3,4,5]) // [-1,-2,-3,-4,-5]);
invert([1,-2,3,-4,5]) // [-1,2,-3,4,-5]);
invert([]) // []);
invert([0]) // [-0]);
