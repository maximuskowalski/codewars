function findNextSquare(sq) {

    if(Number.isInteger( Math.sqrt(sq) )){
        return (Math.sqrt(sq)+1)**2
    }
    return -1;
}

// function tests

findNextSquare(121)//, 144, "Wrong output for 121");
findNextSquare(625)//, 676, "Wrong output for 625");
findNextSquare(319225)//, 320356, "Wrong output for 319225");
findNextSquare(15241383936)//, 15241630849, "Wrong output for 15241383936");

  //it("should return -1 for numbers which aren't perfect squares", function() {
findNextSquare(155)//, -1, "Wrong output for 155");
findNextSquare(342786627)//, -1, "Wrong output for 342786627");
