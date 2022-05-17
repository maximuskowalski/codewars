function isPangram(string){

    string = string.toLowerCase().replace(/[^a-z]/g, "")

    let array = string.split('')

    let newArray = [...new Set(array)]

    console.log( newArray.length === 26 )
    return newArray.length === 26

}


isPangram("The quick brown fox jumps over the lazy dog.")//, true)

isPangram("This is not a pangram.")//, false)
