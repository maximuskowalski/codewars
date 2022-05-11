function isIsogram(str){

    str = str.toLowerCase()

      for(let i = 0; i < str.length; i++){
          if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
              console.log(false)
              return false
          }
      }
      console.log(true)
      return true
}

// function tests

isIsogram("Dermatoglyphics") // , true );
isIsogram("isogram") // , true );
isIsogram("aba") // , false, "same chars may not be adjacent" );
isIsogram("moOse") // , false, "same chars may not be same case"
isIsogram("isIsogram") // , false );
isIsogram("") // , true, "an empty string is a valid isogram" );
