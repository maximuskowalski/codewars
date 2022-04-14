# oppositesAttract
Created: 2022-04-14 20:11

#### LINK:
https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

## Question
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

```javascript
function lovefunc(flower1, flower2){
  // moment of truth
}
// question code
// functions (tests)
lovefunc(1,4) // true)
lovefunc(2,2) // false)
lovefunc(0,1) // true)
lovefunc(0,0) // false)
```


## PREP
### Parameters:
- Take in two number arguments
- Numbers will always be an integer

### Return?
- Check if numbers are odd or even.
- Return `false` if both odd or both even, else `true`

### Examples:
- `(1,4)` // true)
- `(2,2)` // false)
- `(0,1)` // true)
- `(0,0)` // false)

### pseudo code
- Write function to take in two arguments
- Test if each number is ODD or EVEN
- Compare results of test for match
- If results match return false, else true.

## solution
```javascript
function lovefunc(flower1, flower2){
	return ( (flower1 % 2) !== (flower2 % 2) ) ? true : false
}
```

## interesting solutions
```javascript
function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 == 1;
}
// 
let lovefunc = (f1, f2) => !!((f1+f2)%2)
//
const lovefunc=(flower1, flower2)=>flower1 % 2 != flower2 % 2;
//
function lovefunc(flower1, flower2){
  return isPaire(flower1) === isPaire(flower2) ? false : true;
}

function isPaire(num) {
  return num % 2 == 0 ? true : false;
}

```

## Tags
#codewars #100Devs #javascript 

## References
1.  https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript