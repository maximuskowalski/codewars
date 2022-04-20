function firstNonConsecutive (arr) {

    let allConsec = null

    for (let i = 1; i < arr.length; i++) {
        if( arr[i] !== arr[i - 1] + 1){
            console.log(arr[i])
            return arr[i]
            }
    }
        console.log(allConsec)
        return allConsec
}

// Function Tests

firstNonConsecutive([1,2,3,4,6,7,8]) // 6
firstNonConsecutive([4,5,6,7,8,9,10,11,12,13]) // null

// expected undefined to equal null

// Testing for arr = 4,5,6,7,8,9,10,11,12,13: expected undefined to equal null

// If the whole array is consecutive then return null
