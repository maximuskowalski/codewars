function pickIt(arr){
    var odd=[],even=[];

    for(let i = 0; i < arr.length; i++){
      if(arr[i]%2 == 0){
        even.push(arr[i])
      }else{
        odd.push(arr[i])
      }
    }


    return [odd,even];
  }

// function tests
pickIt([1,2]) // [[1] // ,[2]]);
pickIt([1,2,3]) // [[1,3],[2]]);
pickIt([3,2,1])// [[3,1],[2]]);
pickIt([10,20,30]) // [[],[10,20,30]]);
pickIt([11,21,31])// [[11,21,31],[]]);
pickIt([8,1,5,4,6,1,1]) //[[1,5,1,1],[8,4,6]]);
