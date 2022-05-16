function minValue(values){
    let newArr = [...new Set(values)]
    newArr.sort((a, b) => a - b)

    console.log( Number(newArr.join('')) )
    return Number(newArr.join(''))

}

// function tests
minValue([1, 3, 1]) // 13);
minValue([4, 7, 5, 7]) // 457);
minValue([4, 8, 1, 4]) // 148);
minValue([5, 7, 9, 5, 7]) // 579);
minValue([6, 7, 8, 7, 6, 6]) // 678);
minValue([5, 6, 9, 9, 7, 6, 4]) // 45679);
minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]) // 134679);
minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]) // 356789);
minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) // 1);
