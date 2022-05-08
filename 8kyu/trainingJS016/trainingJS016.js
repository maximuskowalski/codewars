function cutIt(arr){

    let min = arr[0]

    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i].length < min.length){
          min = arr[i];
        }
    }

    let newArr = []

    for(let i = 0 ; i < arr.length ; i++ ){
        newArr.push(arr[i].slice(0,min.length))
    }

    console.log(min)
    console.log(min.length)
    console.log(newArr)

    return newArr
}

cutIt(["ab","cde","fgh"])  // ["ab","cd","fg"]);
cutIt(["abc","defgh","ijklmn"])  // ["abc","def","ijk"]);
cutIt(["codewars","javascript","java"])  // ["code","java","java"]);

