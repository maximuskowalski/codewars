function findMissingLetter(array) {

    let startCode = array[0].charCodeAt(0)

    console.log(startCode)

    for( let i = 0; i < array.length; i++ ) {
      if( array[i].charCodeAt(0) !== startCode + i ){
        console.log( String.fromCharCode( startCode + i ) )
        return String.fromCharCode( startCode + i )
      }
    }

}

// function tests
findMissingLetter(['a','b','c','d','f'])//, 'e');
findMissingLetter(['O','Q','R','S'])//, 'P');
