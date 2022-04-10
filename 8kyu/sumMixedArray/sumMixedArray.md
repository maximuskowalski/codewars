# sumMixedArray
Created: 2022-04-06 16:46

#### LINK:
https://www.codewars.com/kata/57eaeb9578748ff92a000009
## Question
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

```javascript
function sumMix(x){

}

sumMix([9, 3, '7', '3'])  // ===> 22
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])  // ===> 42
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])  // ===> 41

```


## PREP
### Parameters:
- Crete function to calculate the sum of an array
- The numbers may be in string or number format
- We must accept non number valued as numbers
- Return the sum as a number

### Return?
- Number of sum




### Examples:
- [9, 3, '7', '3']  // ===> 22
- ['5', '0', 9, 3, 2, 1, '9', 6, 7]  // ===> 42
- ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']  // ===> 41
____________
**Inputs:**
-   [9, 3, '7', '3'

**Output**
-   22
____________
**Inputs:**
-    ['5', '0', 9, 3, 2, 1, '9', 6, 7]

**Output**
-   42
____________
**Inputs:**
-   ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']

**Output**
-   41


### pseudo code
- create fuction to take in parameter, argument will be an array
- Convert string elements in the array to numbers
- add all the elements together now that they are numbers
- return sum in number format

## solution
```javascript
function sumMix(x){
 let total = x.map(Number).reduce( (previousValue, currentValue) => previousValue + currentValue, 0 );
 console.log(total)
 return total
}
```

## interesting solutions
```javascript

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

// 

const sumMix=x=>x.reduce((a,b)=>+b+a,0)

//

function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}

```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/57eaeb9578748ff92a000009