# numToString
Created: 2022-04-04 10:33

#### LINK:
https://www.codewars.com/kata/5265326f5fda8eb1160004c8

## Question
We need a function that can transform a number into a string.
What ways of achieving this do you know?

#### Examples:
```
123 --> "123"
999 --> "999"
```

```javascript
function numberToString(num) {
  // Return a string of the number here!
}

numberToString(67) // ====> '67'

```


## PREP
### Parameters:
- Take in number only
- Numbers may are not exclusively positive integers

### Return?
- return the same number in string format

### Examples:
-  123 --> "123"
- 999 --> "999"
____________
**Inputs:**
-  123 

**Output**
-   `"123"`
____________
**Inputs:**
-   `999`

**Output**
-   `"999"`

### pseudo code
- accept number input
- convert number data type to string data type
- return string

## solution
```javascript
function numberToString(num) {
 return num.toString()
}

numberToString(-67) // ====> '67'

```

## interesting solutions
```javascript

function numberToString(num) {
  return String(num);
}

// 

function numberToString(num) {
  return ''+num;
}

//

const numberToString = num => `${num}`;

```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/5265326f5fda8eb1160004c8