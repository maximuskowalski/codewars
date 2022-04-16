function getDrinkByProfession(param){
  param = param.toLowerCase()

  if (param === "jabroni"){
    console.log("Jabroni" + " = " + "Patron Tequila" )
    return "Patron Tequila";
  }else if (param === "school counselor"){
    console.log("School Counselor" + " = " + "Anything with Alcohol" )
    return "Anything with Alcohol";
  }else if (param === "programmer"){
    console.log("Programmer" + " = " + "Hipster Craft Beer" )
    return "Hipster Craft Beer";
  }else if (param === "bike gang member"){
    console.log("Bike Gang Member" + " = " + "Moonshine" )
    return "Moonshine";
  }else if (param === "politician"){
    console.log("Politician" + " = " + "Your tax dollars" )
    return "Your tax dollars";
  }else if (param === "rapper"){
    console.log("Rapper" + " = " + "Cristal" )
    return "Cristal";
  }else{
    console.log( param + " = " + "Beer" )
    return "Beer";
  }
}


// functions (tests)
getDrinkByProfession("jabrOni")  //  "Patron Tequila"
getDrinkByProfession("scHOOl counselor")  //  "Anything with Alcohol"
getDrinkByProfession("prOgramMer")  //  "Hipster Craft Beer"
getDrinkByProfession("bike ganG member")  //  "Moonshine"
getDrinkByProfession("poLiTiCian")  //  "Your tax dollars"
getDrinkByProfession("rapper")  //  "Cristal"
getDrinkByProfession("pundit")  //  "Beer"
getDrinkByProfession("Pug")  //  "Beer"
