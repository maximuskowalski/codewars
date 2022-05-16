function findOutlier(integers){

    let evenArr = integers.filter( ( e ) => e % 2 == 0 )
    let oddArr = integers.filter( ( e ) => e % 2 != 0 )

    if( evenArr.length > 1){
        console.log(oddArr[0])
        return oddArr[0]
    }else{
        console.log(evenArr[0])
        return evenArr[0]
    }
}

// function tests
findOutlier([0, 1, 2]) //  1)
findOutlier([1, 2, 3]) //  2)
findOutlier([2,6,8,10,3]) //  3)
findOutlier([0,0,3,0,0]) //  3)
findOutlier([1,1,0,1,1]) //  0)
