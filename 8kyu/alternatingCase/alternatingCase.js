function toAlternatingCase(str) {

    let newString = ''

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if(char === char.toUpperCase()){
            newString += char.toLowerCase()

        }else if(char === char.toLowerCase()){
            newString += char.toUpperCase()
      }else{
            newString += char
      }

    }
    console.log(newString)
    return newString
}


with weird Way

String.prototype.toAlternatingCase = function () {
    let newString = ''

    for (let i = 0; i < this.length; i++) {
        let char = this[i]
        if(char === char.toUpperCase()){
            newString += char.toLowerCase()

        }else if(char === char.toLowerCase()){
            newString += char.toUpperCase()
      }else{
            newString += char
      }

    }
    return newString
}


// function tests

toAlternatingCase("hello world")  //  "HELLO WORLD");
toAlternatingCase("HELLO WORLD")  //  "hello world");
toAlternatingCase("hello WORLD")  //  "HELLO world");
toAlternatingCase("HeLLo WoRLD")  //  "hEllO wOrld");
toAlternatingCase("12345")  //  "12345");
toAlternatingCase("1a2b3c4d5e")  //  "1A2B3C4D5E");
toAlternatingCase("String.prototype.toAlternatingCase")  //  "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
// toAlternatingCase("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
