function countSheeps(arrayOfSheep) {

    const sum = arrayOfSheep.reduce((accumulator, item) => {
            if( item == true ) {
                return accumulator +1;
            }
            return accumulator;
    }, 0 );

    console.log(sum)
    return sum

  }

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

countSheeps(array1) // 17, "There are 17 sheeps in total")
