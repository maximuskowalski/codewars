function removeSmallest(numbers) {

    let min = Math.min(...numbers);

    let newArr = = numbers.slice(0)

    const index = newArr.indexOf(min);
    if (index > -1) {
        newArr.splice(index, 1)
    }

    console.log(newArr)
    return newArr
}

function removeSmallest(numbers) {
    if(!numbers)return [];
    let min=Math.min.apply(null,numbers);
    let newArr = numbers.slice(0);
    newArr.splice(newArr.indexOf(min),1);
    return newArr;
    }



// function tests

removeSmallest([1, 2, 3, 4, 5]) //, [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
removeSmallest([5, 3, 2, 1, 4]) //, [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
removeSmallest([2, 2, 1, 2, 1]) //, [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
removeSmallest([]) //, [], "Wrong result for []");
