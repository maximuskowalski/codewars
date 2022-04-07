# wellOfIdeasEasy
Created: 2022-04-07 19:42

#### LINK:
https://www.codewars.com/kata/57f222ce69e09c3630000212
## Question
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

```javascript
function well(x){
}

well(['bad', 'bad', 'bad']) // 'Fail!'
well(['good', 'bad', 'bad', 'bad', 'bad']) // ==> 'Publish!'
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) // ==> 'I smell a series!'
```


## PREP
### Parameters:
- Take in array as an argument
- array will contain only the strings 'good' or 'bad'
- elements in the array will always be lower case.
- the array will never be empty 

### Return?
- 'Fail!' for number of `good` < 1
- 'Publish!' when `good` > 0 and < 2
- 'I smell a series!' when `good` > 2

### Examples:
- ['bad', 'bad', 'bad']
  'Fail!'
- ['good', 'bad', 'bad', 'bad', 'bad']
  'Publish!'
- ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']
  'I smell a series!'
____________
**Inputs:**
-   ['bad', 'bad', 'bad']

**Output**
-    'Fail!'
____________
**Inputs:**
-   ['good', 'bad', 'bad', 'bad', 'bad']

**Output**
-   'Publish!'

____________
**Inputs:**
-  ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']
**Output**
-   'I smell a series!'

### pseudo code
- write function that takes in an array
- count no of elements equal to `good`
- if good count < 0 return  'Fail!'
- else if good count < 2 return 'Publish!' 
- else  'I smell a series!'

## solution
```javascript
function well(x){
  let goodsArr = x.filter(ideas => ideas.includes('good'))
  console.log(goodsArr)
  if (goodsArr.length < 1){
    console.log('Fail!')
    return 'Fail!'
  }else if ( goodsArr.length > 2) {
    console.log('I smell a series!')
    return 'I smell a series!'
  }else{
    console.log('Publish!')
    return 'Publish!'
  }
}

```

## interesting solutions
```javascript

const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}

// 

const  well = x => {
  let count = x.filter(el => el == 'good').length
  return  count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!'; 
}

//

const well = x => x.includes('good') ? x.filter(s => s == 'good').length < 3 ? 'Publish!' : 'I smell a series!' : 'Fail!';

```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/57f222ce69e09c3630000212