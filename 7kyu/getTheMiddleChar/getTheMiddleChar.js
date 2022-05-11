function getMiddle(s) {

    let midChar = s[Math.floor(s.length/2)]
    let firstChar = s[Math.floor(s.length/2-1)]
    let secondChar = s[s.length/2]

    if(s.length % 2 != 0){
        console.log(midChar)
        return midChar
    }else{
        console.log(`${firstChar}${secondChar}`)
        return `${firstChar}${secondChar}`
    }

}


// function tests
getMiddle("test") //, "es");
getMiddle("testing") //, "t");
getMiddle("middle") //, "dd");
getMiddle("A") //, "A");
