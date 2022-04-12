# capitalizationAndMutability
Created: 2022-04-12 14:16

#### LINK:
https://www.codewars.com/kata/595970246c9b8fa0a8000086
## Question
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

```javascript
function capitalizeWord(word) {
  word[0].toUpperCase();
  return word;
}
// question code
capitalizeWord('word')  // 'Word'
capitalizeWord('i')  //   'I'
capitalizeWord('glasswear')  // 'Glasswear'
```


## PREP
### Parameters:
- Take in a string
- String will always be a string
- String will be a single word

### Return?
- Return string with first character capitalised (z for Usanians)

### Examples:
- capitalizeWord('word')  // 'Word'
- capitalizeWord('i')  //   'I'
- capitalizeWord('glasswear')  // 'Glasswear'

### pseudo code
- Write a function to take in a string with one argument
- Convert string to an array
- Change first element of array to uppercase
- Convert array to string
- Return converted string

## solution
```javascript
function capitalizeWord(word) {
 const array = word.split('')
 console.log(array)
 array[0] = array[0].toUpperCase()
 console.log(array.join(''))
 return array.join('')
}

// question code tests

capitalizeWord('word') // 'Word'
capitalizeWord('i') //   'I'
capitalizeWord('glasswear') // 'Glasswear'
```

## interesting solutions
```javascript
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}
// 
const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());
//
const capitalizeWord = w => `${w[0].toUpperCase()}${w.slice(1)}`;
```

## Tags
#codewars #100Devs #javascript #strings #arrays 

## References
1. https://www.codewars.com/kata/595970246c9b8fa0a8000086