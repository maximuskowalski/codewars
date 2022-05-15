function arrayDiff(a, b) {

    let newArr = []

    for( let i = 0 ; i < a.length ; i++ ){
        if(b.indexOf(a[i]) == -1 ){
            newArr.push(a[i])
        }
    }

    console.log(newArr)
    return newArr

}

arrayDiff([1,2], [1]) //, [2], "a was [1,2], b was [1]");
arrayDiff([1,2,2], [1]) //, [2,2], "a was [1,2,2], b was [1]");
arrayDiff([1,2,2], [2]) //, [1], "a was [1,2,2], b was [2]");
arrayDiff([1,2,2], []) //, [1,2,2], "a was [1,2,2], b was []");
arrayDiff([], [1,2]) //, [], "a was [], b was [1,2]");
arrayDiff([1,2,3], [1,2]) //, [3], "a was [1,2,3], b was [1,2]")
