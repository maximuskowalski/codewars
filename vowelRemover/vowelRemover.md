# vowelRemover
Created: 2022-04-09 12:52

#### LINK:
https://www.codewars.com/kata/5547929140907378f9000039
## Question
Create a function called `shortcut` to remove the **lowercase** vowels (`a`, `e`, `i`, `o`, `u` ) in a given string.

-   don't worry about uppercase vowels
-   `y` is not considered a vowel for this kata

```javascript
function shortcut (string) {
  return '';
}
shortcut('hello')  // 'hll'
shortcut('how are you today?')  // 'hw r y tdy?'
shortcut('complain')  // 'cmpln'
```


## PREP
### Parameters:
- Take in a string
- Input will always be a string
- Case does not need to be accounted for, assume lower case always
- `y` is not a vowel

### Return?
- The strong should be returned as is with all lowercase vowels removed

### Examples:
- `"hello"     -->  "hll"`
- `"codewars"  -->  "cdwrs"`
- `"goodbye"   -->  "gdby"```
- `"HELLO"     -->  "HELLO"`

____________
**Inputs:**
-   "hello"

**Output**
-   "hll"
____________
**Inputs:**
-   "codewars"

**Output**
-   "cdwrs"
____________
**Inputs:**
-   "goodbye"

**Output**
-   gdby

### pseudo code
- Write function to take in string
- Check string for lower case vowel characters
- If found remove lower case vowel characters from string
- return string with vowels removed

## solution
```javascript
// my solution
// valid solution but regex
let newString = string.replace(/[a|e|i|o|u]/gi, '');
console.log(newString);
```

## interesting solutions
```javascript
function shortcut(str) {
  return str.split('').filter(function(e) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
  }).join('')
}

// 

const shortcut = string => string.replace( /[euioa]/g, '' );

//

function shortcut(string){
let vowels = 'aeiou';

let result = [];

  for( let i = 0; i < string.length; i++){
  if(!vowels.includes(string[i])){
    result.push(string[i]);
  }
}
  return result.join('');
};

```

## Tags
#codewars #100Devs #javascript #strings #regex 

## References
1. https://www.codewars.com/kata/5547929140907378f9000039