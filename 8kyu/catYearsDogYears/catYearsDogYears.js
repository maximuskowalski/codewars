var humanYearsCatYearsDogYears = function(humanYears) {

    let catYears = 0
    let dogYears = 0

    if(humanYears < 2){
        catYears = 15
        dogYears = 15
    }else if(humanYears < 3){
        catYears = 24
        dogYears = 24
    }else{
        catYears = 24 + ( (humanYears -2) * 4)
        dogYears = 24 + ( (humanYears -2) * 5)
    }

    let newArr = [humanYears,catYears,dogYears]

    console.log(newArr)
    return newArr
  }

// function tests

humanYearsCatYearsDogYears(1) // [1,15,15])
humanYearsCatYearsDogYears(2) // [2,24,24])
humanYearsCatYearsDogYears(10) // [10,56,64])

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
