function tripleTrouble(one, two, three){

    let triString = ''

    for ( let i = 0; i < one.length; i++) {
        triString += one[i] + two[i] + three[i]
    }

    console.log(triString)
    return triString
}

// function tests

tripleTrouble("aaa","bbb","ccc")//  "abcabcabc");
tripleTrouble("aaaaaa","bbbbbb","cccccc")  //"abcabcabcabcabcabc");
tripleTrouble("burn", "reds", "roll") //"brrueordlnsl");
tripleTrouble("Sea","urn","pms")  // "Supermans");
tripleTrouble("LLh","euo","xtr") // "LexLuthor");
