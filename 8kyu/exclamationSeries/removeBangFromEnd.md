# removeBangFromEnd
Created: 2022-04-17 12:48

#### LINK:
https://www.codewars.com/kata/57fae964d80daa229d000126/javascript

## Question
**Description:**
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

**Examples**
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"



```javascript
function remove (string) {
  //coding and coding....
  return '';
}
// functions (tests)
remove("Hi!") // === "Hi"
remove("Hi!!!") // === "Hi!!"
remove("!Hi") // === "!Hi"
remove("!Hi!") // === "!Hi"
remove("Hi! Hi!") // === "Hi! Hi"
remove("Hi") // === "Hi"
```


## PREP
### Parameters:
- Take in string
- Will always be string

### Return?
- String with `!` removed if it is the final character in the string.
- else return string

### Examples:
- remove("Hi!") === "Hi"
- remove("Hi!!!") === "Hi!!"
- remove("!Hi") === "!Hi"
- remove("!Hi!") === "!Hi"
- remove("Hi! Hi!") === "Hi! Hi"
- remove("Hi") === "Hi"

### pseudo code
- Write function to take in string
- check last character of string for match to `!`
- If there is no match then return string
- if match is true then convert string to array on per character ('')
- delete last element in array
- convert array back to string and return string

## solution
```javascript
function remove (string) {

	if( (string[string.length-1]) === '!') {
		console.log(true)
		let arr = string.split('')
		arr.pop()
		console.log(arr.join(''))
		return arr.join('')
		
	}else{
		console.log(false)
		console.log(string)
		return string
	}

}

// function tests

remove("Hi!") // === "Hi"
remove("Hi!!!") // === "Hi!!"
remove("!Hi") // === "!Hi"
remove("!Hi!") // === "!Hi"
remove("Hi! Hi!") // === "Hi! Hi"
remove("Hi") // === "Hi"

```

## interesting solutions
```javascript
const remove = s => s.replace(/!$/, '');
// 
function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}
//
function remove(s){
  return s.charAt(s.length-1)=="!"?s.substr(0,s.length-1):s;
}
```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/57fae964d80daa229d000126/javascript