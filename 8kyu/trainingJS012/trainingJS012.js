function giveMeFive(obj){

    let newArr = []

    for (var key in obj){
        if(key.length === 5){
            newArr.push(key)
        }
        if(obj[key].length === 5){
            newArr.push(obj[key])
        }
      }

    console.log(newArr)
    return newArr

}

// if the length of the object key equals to 5, then push the key value to the array

// Additionally push the value to the array as well, if the length of the value is equal to 5.


// function tests

giveMeFive({Our:"earth",is:"a",beautyful:"world"}) // ["earth","world"]);
giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}) //["Ihave","money","model"]);
giveMeFive({Pears:"than",apple:"sweet"}) // ["Pears","apple","sweet"]);

