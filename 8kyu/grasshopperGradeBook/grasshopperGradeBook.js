function getGrade (s1, s2, s3) {
    let averageGrade = (s1 + s2 + s3) / 3

    if(averageGrade < 60){
        console.log('F')
        return 'F'
    }else if(averageGrade < 70){
        console.log('D')
        return 'D'
    }else if(averageGrade < 80){
        console.log('C')
        return 'C'
    }else if(averageGrade < 90){
        console.log('B')
        return 'B'
    }else{
        console.log('A')
        return 'A'
    }
}

// function tests
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60


// 'should return an A', function () {
getGrade(95,90,93)  //  'A')
getGrade(100,85,96)  //  'A')
getGrade(92,93,94)  //  'A')

// 'should return a B', function () {
getGrade(70,70,100)  //  'B')
getGrade(82,85,87)  //  'B')
getGrade(84,79,85)  //  'B')
getGrade(89,89,90)  //  'B')

// 'should return a C', function () {
getGrade(70,70,70)  //  'C')
getGrade(75,70,79)  //  'C')
getGrade(60,82,76)  //  'C')

// 'should return a D', function () {
getGrade(65,70,59)  //  'D')
getGrade(66,62,68)  //  'D')
getGrade(58,62,70)  //  'D')

// 'should return an F', function () {
getGrade(44,55,52)  //  'F')
getGrade(48,55,52)  //  'F')
getGrade(58,59,60)  //  'F')
getGrade(73, 89, 18)
