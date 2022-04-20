function whoIsPaying(name){
    let payer = [name]

    if( name.length > 2 ) {
        let shortName = (name.charAt(0))+(name.charAt(1))
        payer.push( shortName )
    }

    console.log(payer)
    return payer

  }


whoIsPaying("Mexico")   ///   ["Mexico", "Me"]);
whoIsPaying("Melania")   ///   ["Melania", "Me"]);
whoIsPaying("Melissa")   ///   ["Melissa", "Me"]);
whoIsPaying("Me")   ///   ["Me"]);
whoIsPaying("")   ///   [""]);
whoIsPaying("I")   ///   ["I"]);
