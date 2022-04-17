# exclamationDeVoweler
Created: 2022-04-17 11:55

#### LINK:
https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

## Question
Replace all vowel to exclamation mark in the sentence. `aeiouAEIOU` is vowel.

### Examples

```
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
```


```javascript
function replace(s){
  //coding and coding....
}
// functions (tests)
replace("Hi!")  //  "H!!"
replace("!Hi! Hi!")  //  "!H!! H!!"
replace("aeiou")  //  "!!!!!"
replace("ABCDE")  //  "!BCD!"
```


## PREP
### Parameters:
- Take in a string
- Input will always be a string
- Letters may be of any case

### Return?
- return string with all vowels replaced with !

### Examples:
- replace("Hi!") === "H!!"
- replace("!Hi! Hi!") === "!H!! H!!"
- replace("aeiou") === "!!!!!"
- replace("ABCDE") === "!BCD!"

### pseudo code
- Write function to take in string
- replace any vowel of upper or lower case with `!`
- return new string with `!` 's in place

## solution
```javascript
function replace(s){
  let newString = s.replace(/[a|e|i|o|u]/gi, '!');
  return newString;
}
```

## interesting solutions
```javascript
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}
// 
replace=s=>s.replace(/[aeiou]/gi, '!');
//
function replace(s){
  var newS = ''
  var vowels = "aAeEiIoOuU"
  for (var i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) === -1) {
      newS += s[i]
    }  else {
      newS += '!'
    }
  }
  return newS
}
```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed