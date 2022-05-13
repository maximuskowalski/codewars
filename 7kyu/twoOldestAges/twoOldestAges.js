function twoOldestAges(ages){

    ages.sort((a, b) => b - a )

    let newArr = [ages[1], ages[0]]
    return newArr

}

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

twoOldestAges([1,5,87,45,8,8]) // [45, 87]')
twoOldestAges([6,5,83,5,3,18]) // [18, 83]')
