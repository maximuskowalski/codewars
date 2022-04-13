# wideMouthedFrog
Created: 2022-04-13 20:22

#### LINK:
https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89

## Question
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the `mouth_size` method this method takes one argument `animal` which corresponds to the animal encountered by the frog. If this one is an `alligator` (case-insensitive) return `small` otherwise return `wide`

```javascript
function mouthSize(animal) {
// code here
}
// functions (tests)
mouthSize("toucan") // "wide"
mouthSize("ant bear") // "wide"
mouthSize("alligator") // "small"
```

## PREP
### Parameters:
- Take in an animal name as only argument. Name is a string.
- String might be uppercase or lowercase
- We do not need to account for incorrect data type

### Return?
- If alligator return `small` if not alligator return `wide`

### Examples:
- ("toucan") // "wide"
- ("ant bear") // "wide"
- ("alligator") // "small"

### pseudo code
- Write function to take in a single argument for animal
- Convert string to lower case
- Compare string to `alligator`
- If true return small, else return wide

## solution
```javascript
function mouthSize(animal) {
	animal = animal.toLowerCase()
	console.log( ( animal === 'alligator' ) ? 'small' : 'wide')
	return ( animal === 'alligator' ) ? 'small' : 'wide'
}
```

## interesting solutions
```javascript
function mouthSize(animal) {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}
// 
const mouthSize = (animal) => animal.toLowerCase() == "alligator" ? "small" : "wide";
//
mouthSize=a=>a.toLowerCase()=="alligator"?'small':'wide'
```

## Tags
#codewars #100Devs #javascript #strings 

## References
1. https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89
2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator