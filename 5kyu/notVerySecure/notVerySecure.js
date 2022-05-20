function alphanumeric(string){
    if( string.length < 1 ) return false
    console.log(!string.match(/[^a-zA-Z0-9]/))
    return !string.match(/[^a-zA-Z0-9]/)
}

alphanumeric("Mazinkaiser")//, true)
alphanumeric("hello world_")//, false)
alphanumeric("PassW0rd")//, true)
alphanumeric("     ")//, false)
