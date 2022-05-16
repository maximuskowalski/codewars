function duplicateEncode(word){

    word = word.toLowerCase()

    let codeWord = ''

    for (let i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
            codeWord += '('
        }else{
            codeWord += ')'
        }
    }

    console.log(codeWord)
    return codeWord

}

duplicateEncode("din")//,"(((");
duplicateEncode("recede")//,"()()()");
duplicateEncode("Success")//,")())())","should ignore case");
duplicateEncode("(( @")//,"))((");
