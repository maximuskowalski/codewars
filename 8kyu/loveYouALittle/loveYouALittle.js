function howMuchILoveYou(nbPetals) {
    const answer = ['I love you','a little','a lot','passionately', 'madly', 'not at all'];

    let indexNum

    if( nbPetals % answer.length === 0){
        indexNum = answer[5]
    }else{
        indexNum = answer[ (nbPetals % answer.length) -1 ]
    }

    console.log(indexNum);
    return indexNum
}

// Function Tests

howMuchILoveYou(7) // "I love you")
howMuchILoveYou(3) // "a lot")
howMuchILoveYou(6) // "not at all")


// 1 I love you
// 2 a little
// 3 a lot
// 4 passionately
// 5 madly
// 6 not at all

// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

function howMuchILoveYou(nbPetals) {

    let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];

    return petals[(nbPetals-1) % 6];

  }

