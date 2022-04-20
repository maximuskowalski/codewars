function grow(x){
    let sum = 1;
    x.forEach(num => { sum = sum * num });
    console.log(sum)
    return sum
}


// Function Tests

grow([1, 2, 3])  // 6
grow([4, 1, 1, 1, 4])  // 16
grow([2, 2, 2, 2, 2, 2])  // 64
