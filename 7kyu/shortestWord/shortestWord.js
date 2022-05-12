function findShort(s){

    let newArr = s.split(' ')

    let smallest = newArr[0].length

    for(let i = 1; i < newArr.length; i++){
        if(newArr[i].length < smallest){
            smallest = newArr[i].length
        }
    }
    console.log(smallest)
    return smallest
}

// function tests

findShort("bitcoin take over the world maybe who knows perhaps")// ,3);
findShort("turns out random test cases are easier than writing out basic ones")// ,3);
findShort("Let's travel abroad shall we")// ,2);
