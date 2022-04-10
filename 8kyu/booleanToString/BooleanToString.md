# BooleanToString
Created: 2022-03-30 19:51

#### LINK:
https://www.codewars.com/kata/551b4501ac0447318f0009cd

## Question
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

```javascript
function booleanToString(b){
  //your code here
}
// Tests function booleanToString(b)
// booleanToString(false), "false"
// booleanToString(true), "true"
}

```

## pseudo code
Take input of a boolean value.
Pass boolean to a string value.
return value as a string

## solution
```javascript
function booleanToString(b){
  return b.toString();
}
```

## interesting solutions
```javascript
function booleanToString(b){
  return String(b);
}

// 

function booleanToString(b){
  return `${b}`
}

//

function booleanToString(b){
  return b+'';
}

//

function booleanToString(b){
  if (typeof b == 'boolean') {
    return String(b);
  }
}


```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/551b4501ac0447318f0009cd