const reverseSeq = n => {
    let newArr = []

    for(let i = n; i > 0; i--){
        newArr.push(i)
    }
    console.log(newArr)
    return newArr;
};

// function tests
reverseSeq(5)  // [5, 4, 3, 2, 1]
