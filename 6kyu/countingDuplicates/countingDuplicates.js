function duplicateCount(text){

    arr = text.toLowerCase().split('')

    const count = {};

    for (const element of arr) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }

    let dupes = 0

    for (var key in count){
        if( count[key] > 1 ){
            dupes += 1
        };
      }


    console.log(dupes)
    return dupes

}

// function tests
duplicateCount("") //  0);
duplicateCount("abcde") //  0);
duplicateCount("aabbcde") //  2);
duplicateCount("aabBcde") //  2,"should ignore case");
duplicateCount("Indivisibility") //  1)
duplicateCount("Indivisibilities") //  2, "characters may not be adjacent")

