function findEvenIndex(arr) {

    let wholeSum = arr.reduce( ( acc, item ) => acc + item, 0 )

    let startSum = 0

    for (let i = 0; i < arr.length; i++) {

        wholeSum -= arr[i]

        if (startSum === wholeSum) {
            console.log(i)
            return i
        }

        startSum += arr[i]
    }

    console.log(-1)
    return -1

}

// function tests

findEvenIndex([1,2,3,4,3,2,1])//,3, "The array was: [1,2,3,4,3,2,1] \n");
findEvenIndex([1,100,50,-51,1,1])//,1, "The array was: [1,100,50,-51,1,1] \n");
findEvenIndex([1,2,3,4,5,6])//,-1, "The array was: [1,2,3,4,5,6] \n");
findEvenIndex([20,10,30,10,10,15,35])//,3, "The array was: [20,10,30,10,10,15,35] \n");
