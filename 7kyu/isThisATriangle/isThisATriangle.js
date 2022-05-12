function isTriangle(a,b,c){

    let newArr = [a, b, c].sort((a1, b1) => a1 - b1)

    if(newArr[2] < newArr[0] + newArr[1]) return true

   return false;
}

// longest side must be greater in length than sum of two shorter sides

// function tests

isTriangle(1,2,2) // , true);
isTriangle(7,2,2) // , false);
