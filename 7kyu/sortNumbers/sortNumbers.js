function solution(nums){
    if (nums != null && nums.length > 0) {
        console.log( nums.sort((a,b) => a - b ) )
        return nums.sort((a,b) => a - b )
    }else{
        console.log([])
        return []
    }
}

// function tests

solution([1,2,3,10,5])//, [1,2,3,5,10])
solution(null)//, [])
solution([])//, [])
solution([20, 2, 10])//, [2,10,20])
solution([2, 20, 10])//, [2,10,20])
