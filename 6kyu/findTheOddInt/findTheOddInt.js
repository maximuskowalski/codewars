function findOdd(A) {

    const count = {};

    for (const element of A) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }

    // console.log(count)

    let odd = 0

    Object.keys(count).forEach(function (key) {
        var value = count[key];
        if( value % 2 != 0){
            odd = Number(key)
        }
      });

      console.log(odd)
      return odd

}

// function tests

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])//, 5);
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])//, -1);
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])//, 5);
findOdd([10])//, 10);
findOdd([1,1,1,1,1,1,10,1,1,1,1])//, 10);
findOdd([5,4,3,2,1,5,4,3,2,10,10])//, 1);
