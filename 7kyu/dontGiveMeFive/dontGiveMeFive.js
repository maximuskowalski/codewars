function dontGiveMeFive(start, end){

    let fiveCount = 0

    let sum = 0

    for(let i = start ; i <= end ; i++){
        if(String(i).includes('5')){
            fiveCount += 1
        }else{
            sum += 1
        }

    }
    console.log(fiveCount)
    console.log(sum)
    return sum

}

dontGiveMeFive(1,9)//, 8);
dontGiveMeFive(4,17)//, 12);

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// 17 - 4 / 5

dontGiveMeFive(1, 90) // 72
// 9
// 81
// expected 81 to equal 72

dontGiveMeFive(-25, 59) // 67
// 9
// 76
// expected 76 to equal 67
