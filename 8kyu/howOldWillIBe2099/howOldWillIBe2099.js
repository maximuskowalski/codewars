function  calculateAge(birthY, ageY) {

    if(ageY===birthY){
        console.log('You were born this very year!')
        return 'You were born this very year!'
    }else if(ageY < birthY){
        let yearsToBirth = Math.abs(ageY-birthY)

        if (yearsToBirth === 1){
            console.log(`You will be born in ${yearsToBirth} year.`)
            return `You will be born in ${yearsToBirth} year.`

        }else{
            console.log(`You will be born in ${yearsToBirth} years.`)
            return `You will be born in ${yearsToBirth} years.`
        }

    }else{
        let age = ageY-birthY

        if (age === 1){
            console.log(`You are ${age} year old.`)
            return `You are ${age} year old.`
        }else{
            console.log(`You are ${age} years old.`)
            return `You are ${age} years old.`
        }
    }
}

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

//

calculateAge(2012, 2016)  //  "You are 4 years old.");
calculateAge(1989, 2016)  //  "You are 27 years old.");
calculateAge(2000, 2090)  //  "You are 90 years old.");
calculateAge(2000, 1990)  //  "You will be born in 10 years.");
calculateAge(3400, 3400)  //  "You were born this very year!");
calculateAge(900, 2900)  //  "You are 2000 years old.");
calculateAge(2010, 1990)  //  "You will be born in 20 years.");
calculateAge(2010, 1500)  //  "You will be born in 510 years.");
calculateAge(2011, 2012)  //  "You are 1 year old.");
calculateAge(2000, 1999)  //  "You will be born in 1 year.")
