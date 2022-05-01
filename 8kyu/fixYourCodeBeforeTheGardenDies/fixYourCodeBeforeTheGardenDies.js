function rainAmount(mm){
    if (mm < 40) {

        console.log("You need to give your plant " + (40 - mm) + "mm of water")

         return "You need to give your plant " + (40 - mm) + "mm of water"

        }else{

         return "Your plant has had more than enough water for today!"
    }

}

// function tests

rainAmount(100) // "Your plant has had more than enough water for today!")
rainAmount(39) // "You need to give your plant 1mm of water")
