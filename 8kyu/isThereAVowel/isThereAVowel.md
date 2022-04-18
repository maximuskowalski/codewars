# isThereAVowel
Created: 2022-04-18 11:22

#### LINK:
https://www.codewars.com/kata/57cff961eca260b71900008f

## Question
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (`a, e, i, o, u`).

If they are, change the array value to a string of that vowel.

Return the resulting array.

```javascript
function isVow(a){

}
// functions (tests)
isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])
// [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]

isVow([101,121,110,113,113,103,121,121,101,107,103])
// ["e",121,110,113,113,103,121,121,"e",107,103]
```


## PREP
### Parameters:
- Take in an array of numbers
- will always be numbers
- will always be integers

- #### ASCII CODES
	- a = 97
	- e = 101
	- i = 105
	- o = 111
	- u = 117

### Return?
- Check array for matches to vowel ASCII codes
- If match found replace that integer with corresponding vowel
- return array with vowel substitutions in place

### Examples:
- [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]
    [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]

- [101,121,110,113,113,103,121,121,101,107,103]
    ["e",121,110,113,113,103,121,121,"e",107,103]

### pseudo code
- write function to take in number array
- check array for matches to vowel codes
- replace each vowel code element value with vowel value
- return new array with vowels substituted

## solution
```javascript
function isVow(a){

	a.forEach(function(item, i) { if (item == 97) a[i] = 'a'; });
	a.forEach(function(item, i) { if (item == 101) a[i] = 'e'; });
	a.forEach(function(item, i) { if (item == 105) a[i] = 'i'; });
	a.forEach(function(item, i) { if (item == 111) a[i] = 'o'; });
	a.forEach(function(item, i) { if (item == 117) a[i] = 'u'; });

	console.log(a)
	return a
}
```

## interesting solutions
```javascript

function isVow(a){
  for (var i=0, l=a.length; i<l; ++i)
  {
    var char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1)
    a[i] = char;
  }
  
  return a;
}
// 
const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)
//
const isVow = a =>{
  let map = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u',
  }
  return a.map( num => map[num] ? map[num] : num);
}
```

## Tags
#codewars #100Devs #javascript #map #forEach

## References
1.  https://www.codewars.com/kata/57cff961eca260b71900008f