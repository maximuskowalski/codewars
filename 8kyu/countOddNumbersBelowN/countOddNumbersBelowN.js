function oddCount(n){

    console.log( Math.floor(n /2) )
    return Math.floor(n /2)

}

// function tests

// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

oddCount(15) // 7, "Oops! Wrong.");
oddCount(15023) // 7511, "Oops! Wrong.");
