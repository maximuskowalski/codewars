function capitalize(s){

    let newArr = []

    let stringOne = ''

    let stringTwo = ''

    for( let i = 0; i < s.length; i++ ){
        let ch = s[i]
        if( i % 2 == 0){
            stringOne += ch.toUpperCase()
            stringTwo += ch.toLowerCase()
        }else{
            stringOne += ch.toLowerCase()
            stringTwo += ch.toUpperCase()
        }
    }

    // console.log(stringOne)
    // console.log(stringTwo)

    newArr.push(stringOne, stringTwo)
    console.log(newArr)
    return newArr

}

// function tests

capitalize("abcdef") // ['AbCdEf', 'aBcDeF']);
capitalize("codewars") //,['CoDeWaRs', 'cOdEwArS']);
capitalize("abracadabra") //,['AbRaCaDaBrA', 'aBrAcAdAbRa']);
capitalize("codewarriors") // ,['CoDeWaRrIoRs', 'cOdEwArRiOrS']);


// function caseAlter(str){
//     var output = "";
//     for(var i = 0; i < str.length; i++){
//       var ch = str[i];
//         if(ch === ch.toUpperCase()){
//           output += ch.toLowerCase();
//         }else{
//           output += ch.toUpperCase();
//         }
//       }
//       return output;
//   }
