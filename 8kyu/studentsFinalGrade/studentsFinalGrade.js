function finalGrade (exam, projects) {

    if( exam > 90 || projects > 10){
        console.log(100)
        return 100
    }else if( exam > 75 && projects > 4){
        console.log(90)
        return 90
    }else if( exam > 50 && projects > 1){
        console.log(75)
        return 75
    }else{
        return 0
    }

}

// function tests

finalGrade(100, 12) // 100
finalGrade(85, 5)  // 90

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other case
