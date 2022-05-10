function validParentheses(parens){

    let sum = 0

    for (let i = 0; i < parens.length; i++) {

      if (parens[i] == '(') {

          sum++
        }

      if (parens[i] == ')') {
          sum--
        }

      if (sum < 0) {
          console.log(false)
          return false
        }
    }

    if(sum === 0) {
        console.log(true)
        return true
      }else{
        console.log(false)
        return false;
      }

}


// function validParentheses(parens) {

//         let answer = true
//         let sum = 0

//         for(let i=0;i<parens.length;i++){
//             if (parens[i] == '('){
//                 sum = sum + 1
//             }else if(parens[i] == ')'){
//                 sum = sum - 1
//             }
//         }

//         if (sum != 0) answer = false

//         console.log(sum)
//         console.log(answer)

//         return answer
// }



// function validParentheses(parens) {


//     let newArr = parens.split('')

//     if(newArr.length == 0){
//         console.log('true')
//         return true
//     }

//     while(newArr.length > 0){
//         if(newArr[0] === newArr[newArr.length - 1]){
//             console.log(newArr)
//             console.log('false')
//             return false
//         }else{
//             newArr.shift()
//             newArr.pop()
//         }
//     }
//     console.log('true')
//     return true
// }

// function tests
validParentheses( "(" ) //, false));
validParentheses( ")" ) //, false));
validParentheses( "" ) //, true));
validParentheses( "()" ) //, true));
validParentheses( "())" ) //, false));
validParentheses( "()" ) //              =>  true
validParentheses( ")(()))" ) //          =>  false
validParentheses( "(" ) //               =>  false
validParentheses( "(())((()())())" ) //  =>  true
//                    [ ')((()())' ]
//                  "( ( ) )((()()) ( ) )"  =>  true

validParentheses( "( ( ) ()()())( ( ) )" )// expected: true
                    //    [ ()()())( ]
validParentheses( "())(" ) // expected: false
