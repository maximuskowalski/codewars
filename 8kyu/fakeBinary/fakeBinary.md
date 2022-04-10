# fakeBinary
Created: 2022-03-31 19:30

#### LINK:
https://www.codewars.com/kata/57eae65a4321032ce000002d

## PREP
### Parameters:
	-  String of digits (NOT NUMBERS) 
	- Never empty. 
	- Never non digits.

### Return?
	- 0's and 1's. 
	- If n >= 5 replace n with 1
	- if n < 5 replace with 0

### Examples:
	- '45385593107843568'  =  '01011110001100111'
	- '509321967506747'  =   '101000111101101'

### Pseudo code:
	- I need to take in a string
	- I need to iterate through each character in the string and replace the value
	- if n < 5 replace with 0 else replace with 1
	- return complete string with all characters replaced


## Question
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

**Note: input will never be an empty string**

```javascript
function fakeBin(x){

}
// TESTS
fakeBin('45385593107843568') //, '01011110001100111');
fakeBin('509321967506747') //, '101000111101101'); 
fakeBin('366058562030849490134388085') //, '011011110000101010000011011');
  })
});
```

## pseudo code
	- Take in a string
	- Convert string to an array
	- iterate through each index in the array and replace the values
	- if n < 5 replace with 0 else replace with 1
	- convert array back into a string
	- return complete string with all characters replaced

## solution
```javascript
function fakeBin(x){
//convert to an array, loop through array and convert back to string.
let y = x.split('').map(n => n < 5 ? n = '0' : n = '1' ).join('');
// return
return y;
}
```

## interesting solutions
```javascript

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

///////

fakeBin = x => x.split('').map(e => e < 5 ? 0 : 1).join('');

//////

const fakeBin = x =>
  [...x].reduce((pre, val) => pre + +(val >= 5), ``);

```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/57eae65a4321032ce000002d