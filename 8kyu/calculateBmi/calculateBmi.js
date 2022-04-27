function bmi(weight, height) {
    answer = weight / (height ** 2)

    if (answer <= 18.5){
        console.log('Underweight')
        return 'Underweight'
    }else if(answer <= 25.0){
        console.log('Normal')
        return 'Normal'
    }else if(answer <= 30.0){
        console.log('Overweight')
        return 'Overweight'
    }else{
        console.log('Obese')
        return 'Obese'
    }
}

// function tests
// bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

bmi(80, 1.80) // "Normal"
