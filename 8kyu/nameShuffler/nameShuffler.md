# nameShuffler
Created: 2022-04-16 09:54

#### LINK:
https://www.codewars.com/kata/559ac78160f0be07c200005a
## Question
Write a function that returns a string in which firstname is swapped with last name.

```javascript
nameShuffler('john McClane'); => "McClane john"
```

```javascript
function nameShuffler(str){
  //Shuffle It
}
// question code
// functions (tests)
nameShuffler('john McClane') // 'McClane john'
```


## PREP
### Parameters:
- Take in a string
- String is two words separated by a space

### Return?
- Return string with first name and last name transposed

### Examples:
- 'john McClane' => "McClane john"

### pseudo code
- Write a function to take in a single argument
- Argument is a two word string
- Split the string into an Array on " " (space)
- Reverse the array
- Join array into string on " "
- Return string

## solution
```javascript
function nameShuffler(str){
	console.log( str.split(' ').reverse().join(' '))
	return str.split(' ').reverse().join(' ')
}
```

## interesting solutions
```javascript
const nameShuffler = str => str.split(' ').reverse().join(' ');
// 
function nameSuffle(str){
  var arr = str.split(" ");
  return arr[1] + ' ' + arr[0]
}
```

## Tags
#codewars #100Devs #javascript #arrays #strings 

## References
1. https://www.codewars.com/kata/559ac78160f0be07c200005a