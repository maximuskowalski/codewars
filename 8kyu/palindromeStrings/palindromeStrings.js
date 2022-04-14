// Longer
function isPalindromeLong(line) {
  let revArr = line.toString().split('').reverse().join('')
  console.log(line)
  console.log(revArr)
  console.log(( line == revArr ) ? 'true' : 'false')
  return ( line === revArr ) ? 'true' : 'false'
}

// Shorter
function isPalindrome(line) {
  return ( line.toString() === line.toString().split('').reverse().join('') ) ? true : false
}

isPalindrome("anna")     //   true
isPalindrome("walter")   //   false
isPalindrome(12321)      //   true
isPalindrome(123456)     //   false
isPalindrome(".")        //   true
isPalindrome(".!!.")     //   true
