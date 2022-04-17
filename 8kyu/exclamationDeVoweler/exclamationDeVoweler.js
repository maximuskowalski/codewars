function replace(s){
    let newString = s.replace(/[a|e|i|o|u]/gi, '!');
    console.log(newString)
    return newString;
  }

// functions (tests)
replace("Hi!")  //  "H!!"
replace("!Hi! Hi!")  //  "!H!! H!!"
replace("aeiou")  //  "!!!!!"
replace("ABCDE")  //  "!BCD!"
