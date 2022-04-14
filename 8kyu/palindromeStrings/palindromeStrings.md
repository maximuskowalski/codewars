# palindromeStrings
Created: 2022-04-14 17:52

#### LINK:
https://www.codewars.com/kata/57a5015d72292ddeb8000b31

## Question
#### Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

**Examples**
`isPalindrome("anna")`   ==> true
`isPalindrome("walter")` ==> false
`isPalindrome(12321)`    ==> true
`isPalindrome(123456)`   ==> false

```javascript
function isPalindrome(line) {
  return undefined;
}
// question code
// functions (tests)
isPalindrome("anna") // true
isPalindrome("walter") // false
isPalindrome(12321) // true
isPalindrome(123456) // false
isPalindrome(".") // true
isPalindrome(".!!.") // true
```


## PREP
### Parameters:
- Take in a single argument
- Argument may be string or number
- Argument may include punctuation or spaces

### Return?
- Return 'true' if argument is a palindrome, else return 'false'

### Examples:
- `isPalindrome("anna")`   ==> true
- `isPalindrome("walter")` ==> false
- `isPalindrome(12321)`    ==> true
- `isPalindrome(123456)`   ==> false

### pseudo code
- Write a function with a single parameter
- Ensure argument is of string data type
- Test for palindrome - Check if argument is the same if reversed
- if argument is palindrome return `true` else `false`

## solution

```javascript

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

```

## interesting solutions
```javascript
function isPalindrome(line) {
  return (String(line) == String(line).split('').reverse().join('') )
}
// 
[isPalindrome=_=>!0](<isPalindrome = l =%3E Array.from(l).reverse().join('') == l>)
//
isPalindrome = l => Array.from(String(l)).reverse().join('') == l
```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/57a5015d72292ddeb8000b31
2. Older answers might not work any more because tests have changed to include inputs other than strings.