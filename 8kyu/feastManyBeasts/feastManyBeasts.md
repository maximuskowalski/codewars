# feastManyBeasts
Created: 2022-04-07 14:51

#### LINK:
https://www.codewars.com/kata/5aa736a455f906981800360d
## Question
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function `feast` that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that `beast` and `dish` are always lowercase strings, and that each has at least two letters. `beast` and `dish` may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
```javascript
function feast(beast, dish) {
//your function here
}

feast("great blue heron", "garlic naan") // ==> true
feast("chickadee", "chocolate cake") // ==> true
feast("brown bear", "bear claw") // ==> false
```


## PREP
### Parameters:
- Take in two arguments
- Each argument will be a string
- Each argument will never contain numerals
- Each argument will always be lowercase
- Each argument will have at least two letters
- The arguments may have spaces or hyphens but will never be in the first character position

### Return?
-  If the first and last character of each argument is the same return TRUE
- If not the same return FALSE

### Examples:
- "great blue heron", "garlic naan" // ==> true
- "chickadee", "chocolate cake" // ==> true
- "brown bear", "bear claw" // ==> false
____________
**Inputs:**
-   "great blue heron", "garlic naan"

**Output**
-   true
____________
**Inputs:**
-    "chickadee", "chocolate cake"

**Output**
-   true
____________
**Inputs:**
-   "brown bear", "bear claw"

**Output**
-   false

### pseudo code
- write function with two parameters
- convert each argument to an array
- compare first and last index of each array to see if they match
- return "true" for match, else false

## solution
```javascript
function feast(beast, dish) {
 let beastArr = beast.split('')
 let dishArr = dish.split('')
 
 if (beastArr[0] === dishArr[0] && beastArr[beastArr.length - 1] === dishArr[dishArr.length - 1]) {
 console.log(true)
 return true
 }else{
 console.log(false)
 return false
 }
}

```

## interesting solutions
```javascript

function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

// 

function feast(beast, dish) {
  return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
}

//

function feast(beast, dish) {
  return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
}

```

## Tags
#codewars #100Devs #javascript #strings 

## References
1. https://www.codewars.com/kata/5aa736a455f906981800360d