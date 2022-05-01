function nextId(ids){

    for (let i = 0; i <= Math.max(...ids)+1; i++) {
        if(!ids.includes(i)){
            console.log(i)
            return i
        }
    }
}

// function tests

nextId([0,1,2,3,5]) // 4);

nextId([0,1,2,3,4,5,6,7,8,9,10]) //  11);
