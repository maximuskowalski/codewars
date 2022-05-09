function twoHighest(arr) {

    let uniqueArr = [...new Set(arr)]

    uniqueArr = uniqueArr.sort((a,b) => b-a)

    let answer = []

    if(uniqueArr.length>0) answer.push(uniqueArr[0])
    if(uniqueArr.length>1) answer.push(uniqueArr[1])

    console.log(answer)
    return answer
}

twoHighest([])// [])
twoHighest([15])// [15])
twoHighest([15, 20, 20, 17]) // [20, 17])
