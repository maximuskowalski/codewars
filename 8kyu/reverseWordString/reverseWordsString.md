# reverseWordsString
Created: 2022-04-16 10:09

#### LINK:
https://www.codewars.com/kata/57a55c8b72292d057b000594
## Question
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (**Input** --> **Output**)

```
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
```

Happy coding!

```javascript
function reverse(string){
  //your code here
}

// functions (tests)
reverse('I am an expert at this') // 'this at expert an am I'
reverse('This is so easy') // 'easy so is This'
reverse('no one cares') // 'cares one no'
reverse('') // ''
reverse('CodeWars') // 'CodeWars'
```


## PREP
### Parameters:
- Take in a string
- String may have trailing white space to be ignored
- String may be empty

### Return?
- Reverse the order of words in string

### Examples:
- "Hello World" --> "World Hello"
- "Hi There." --> "There. Hi"

### pseudo code
- Write function to take in string
- Remove trailing white space
- Convert string to an array, split on " "
- Reverse element order in the array
- Join array back into string with " "
- Return reversed string

## solution
```javascript
function reverse(string){
  //your code here
}
// my solution
reverse('I am an expert at this') // 'this at expert an am I'
reverse('This is so easy') // 'easy so is This'
reverse('no one cares') // 'cares one no'
reverse('') // ''
reverse('CodeWars') // 'CodeWars'
```

## interesting solutions
```javascript
reverse = s => s.split(' ').reverse().join(' ')
// 
function reverse(string){
  // validate input
  if (typeof(string) !== 'string') throw new Error('reverse: parameter is not a string!');
  // just use the dumb way out since it's jabbascripps
  return string.split(' ').reverse().join(' ');
}
//
function reverse(string){
  return string.trim().split(/ +/).reverse().join(' ');
}
```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/57a55c8b72292d057b000594