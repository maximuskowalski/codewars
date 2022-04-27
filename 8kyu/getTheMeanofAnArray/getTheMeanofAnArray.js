function getAverage(marks){
    let total = marks.reduce(
        ( acc, item ) => acc + item,
        0
      )

      console.log( Math.floor(total/marks.length))
      return Math.floor(total/marks.length)

}

// function tests

getAverage([2,2,2,2])  //  2);
getAverage([1,2,3,4,5,])  //  3);
getAverage([1,1,1,1,1,1,1,2])  //  1);
