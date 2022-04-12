# checkSameCase
Created: 2022-04-12 17:09

#### LINK:
https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

## Question
Write a function that will check if two given characters are the same case.

-   If any of characters is not a letter, return `-1`
-   If both characters are the same case, return `1`
-   If both characters are letters and not the same case, return `0`

```javascript
function sameCase(a, b){
  return 0;
}
// question code
// functions (tests)
sameCase('C', 'B') // 1
sameCase('b', 'a') // 1
sameCase('d', 'd') // 1
sameCase('A', 's') // 0
sameCase('c', 'B') // 0
sameCase('b', 'Z') // 0
sameCase('\t', 'Z') // -1
sameCase('H', ':') // -1
```


## PREP
### Parameters:
- Take in two arguments, they could be anything
- Check if the arguments are both letters
- check if the arguments are both the same case

### Return?
-   If any of characters is not a letter, return `-1`
-   If both characters are the same case, return `1`
-   If both characters are letters and not the same case, return `0`

### Examples:
- `'a'` and `'g'` returns `1`
- `'A'` and `'C'` returns `1`
- `'b'` and `'G'` returns `0`
- `'B'` and `'g'` returns `0`
- `'0'` and `'?'` returns `-1`

### pseudo code
- Write function with two parameters
- Check that both arguments are letters, if false return `-1` and exit program
- Check if both arguments are same case;
	- if true return `1` and exit program
	- if false return `0` and exit program

## solution
```javascript
function sameCase(a, b){
	if(( a.toUpperCase() != a.toLowerCase() ) && ( b.toUpperCase() != b.toLowerCase() )){
		console.log('arg 1 and arg 2 is letters');
		if ( ( (b == b.toUpperCase()) && (a == a.toUpperCase()) ) || ( (b == b.toLowerCase()) && (a == a.toLowerCase()) ) ){
			console.log('arg 1 and 2 same case true');
			console.log(1)
			return 1
		}else{
			console.log('different case')
			console.log(0)
			return 0
		}
	}else{
		console.log('its not letters');
		console.log(-1)
		return -1
	}
}
// my solution
sameCase('C', 'B') // 1
sameCase('b', 'a') // 1
sameCase('d', 'd') // 1
sameCase('A', 's') // 0
sameCase('c', 'B') // 0
sameCase('b', 'Z') // 0
sameCase('\t', 'Z') // -1
sameCase('H', ':') // -1
```

## interesting solutions
```javascript
function sameCase(a, b){
 if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
    return -1
  }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
      return 1
  }else{
    return 0
  }
}
// 
const sameCase = (a, b) => /[^a-z]/i.test(a + b) ? -1 : a === a.toLowerCase() ^ b === b.toUpperCase();
//
function sameCase(a, b){
  let aLowerCase = a === a.toLowerCase()
  let bLowerCase = b === b.toLowerCase()
  let aHigherCase = a === a.toUpperCase()
  let bHigherCase = b === b.toUpperCase()
  if((a.toLowerCase() === a.toUpperCase()) || (b.toLowerCase() === b.toUpperCase())) {
    return -1
  } else if((aLowerCase && bLowerCase) || (aHigherCase && bHigherCase)) {
    return 1
  } else {
    return 0
  }
}
```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript