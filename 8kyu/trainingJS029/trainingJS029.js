function bigToSmall(arr){

    let newArr = []

    for (let i=0;i<arr.length;i++)
    newArr=newArr.concat(arr[i]);

    console.log(newArr)

    newArr.sort().reverse().join('>')
    console.log(newArr.sort((a,b) => a-b).reverse().join('>'))
    return newArr.sort((a,b) => a-b).reverse().join('>')

}

// function tests
// cant use arr.flat it seems
bigToSmall([[1,2],[3,4],[5,6]]) // "6>5>4>3>2>1");
bigToSmall([[1,3,5],[2,4,6]])  // "6>5>4>3>2>1");
bigToSmall([[1,1],[1],[1,1]]) // "1>1>1>1>1");
bigToSmall([[19,16,1,28,19],[27,12,44,36,4],[5,30,49,24,26],[46,3,2,21,7,36],[7,24,27,29,13,11],[14],[15,37,15,18,34,8],[34]])
