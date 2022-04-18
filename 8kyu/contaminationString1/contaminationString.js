function contamination(text, char){
    if ( text === '' || char === '' ){
        console.log('')
        return ''
    }else{
        console.log( char.repeat(text.length) )
        return char.repeat(text.length)
    }
  }


// Function Tests

contamination("abc","z")   //   "zzz"
contamination("","z")   //   ""
contamination("abc","")   //   ""
contamination("_3ebzgh4","&")   //   "&&&&&&&&"
contamination("//case"," ")   //   "      "
