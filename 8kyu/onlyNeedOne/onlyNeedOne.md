# onlyNeedOne
Created: 2022-04-02 15:47

#### LINK:
https://www.codewars.com/kata/57cc975ed542d3148f00015b
## Question
You will be given an array `a` and a value `x`. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return `true` if the array contains the value, `false` if not.

```javascript
function check(a, x) {
  // your code here
}

check([66, 101], 66) //  ===> true
check([101, 45, 75, 105, 99, 107], 107) //  ===> true
check(['t', 'e', 's', 't'], 'e') //  ===>  true);
check(['what', 'a', 'great', 'kata'], 'kat') //  ===> false


```


## PREP
### Parameters:
- An array and a value will be supplied.
- Array can contain strings or numbers
- value can be either string or number

### Return?
- Check if value can be found in the array
- If found return true, if not found return false

### Examples:
- [66, 101], 66  //  ===> true 
- [101, 45, 75, 105, 99, 107], 107  //  ===> true
- ['t', 'e', 's', 't'], 'e' //  ===>  true
- ['what', 'a', 'great', 'kata'], 'kat' //  ===> false

### pseudo code
- Take in array and value
- Check for exact match of value in array
- if match is found return true
- else return false

## solution
```javascript
function check(a, x) {
return (a.includes(x)) ? true : false;
}
```

## interesting solutions
```javascript

const check = (a,x) => a.includes(x);

// 

function check(a,x){
  return a.includes(x);
};

//

function check(a,x){
  return a.indexOf(x) > -1;
};

```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/57cc975ed542d3148f00015b