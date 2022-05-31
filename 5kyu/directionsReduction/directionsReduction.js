function dirReduc(arr){

    let newArr = []

    for( let i = 0; i < arr.length; i++ ){
        if(    ( arr[i] === "NORTH" && arr[i+1] === "SOUTH" )
            || ( arr[i] === "SOUTH" && arr[i+1] === "NORTH" )
            || ( arr[i] === "EAST" && arr[i+1] === "WEST" )
            || ( arr[i] == "WEST" && arr[i+1] === "EAST" )
            ) {
                i++

        }else{
            if(    ( newArr[newArr.length - 1] === "NORTH" && arr[i] === "SOUTH" )
                || ( newArr[newArr.length - 1] === "SOUTH" && arr[i] === "NORTH" )
                || ( newArr[newArr.length - 1] === "EAST" && arr[i] === "WEST" )
                || ( newArr[newArr.length - 1] === "WEST" && arr[i] === "EAST" )
            ){
                newArr.pop()
            } else {
                newArr.push(arr[i])
            }
        }
    }

    console.log(newArr)
    return newArr

}


// function tests

dirReduc(
    ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) //["WEST"]
dirReduc(
    ["NORTH", "WEST", "SOUTH", "EAST"]) //, ["NORTH", "WEST", "SOUTH", "EAST"]

dirReduc(
    ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]) // ,[]
