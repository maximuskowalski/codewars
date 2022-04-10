# sortAndStar
Created: 2022-04-07 17:57

#### LINK:
https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
## Question
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have `"***"` between each of its letters.

You should not remove or add elements from/to the array.

```javascript
function twoSort(s) {
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) // ===> 'b***i***t***c***o***i***n'
twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"] // ===>  'a***r***e'
```


## PREP
### Parameters:
- Take in vector? This probably means array.
- Array argument will contain  string elements
- Array must be sorted alphabetically, case sensitively based on ASCII values

### Return?
- The first element when sorted alphabetically
- Insert `***` between each character

### Examples:
- ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]
  // ===> `'b***i***t***c***o***i***n'`
- ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"] 
  // ===>  `'a***r***e'`

____________
**Inputs:**
-   ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]

**Output**
-   `'b***i***t***c***o***i***n'`
____________
**Inputs:**
-   ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"] 

**Output**
-    `'b***i***t***c***o***i***n'`

### pseudo code
- Write function to take in array.
- Sort the array strings alphabetically.
- identify and extract the first element at index [0]
- return the first element but insert `***` between each character letter 

## solution
```javascript
function twoSort(s) {
    s.sort()
	console.log(s)
	let a = s[0]
	console.log(a)
	a = a.split('').join('***')
	console.log(a)
	return(a)
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) // ===> 'b***i***t***c***o***i***n'

twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]) // ===> 'a***r***e'

```

## interesting solutions
```javascript

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

// 

twoSort = s => s.sort()[0].split('').join('***')

//

const twoSort = s => [...s.sort()[0]].join('***');

```

## Tags
#codewars #100Devs #javascript #strings #arrays 

## References
1. https://www.codewars.com/kata/57cfdf34902f6ba3d300001e