# multiples of 3 or 5

#### LINK:
https://www.codewars.com/kata/514b92a657cdc65150000006
## Question

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

```javascript
function solution(number){

}
// question code
// functions (tests)
test(10,23)
```


## PREP
### Parameters:
- input will be a number
- input may be negative
- in the case of negative the question is unclear as to how to respond. Assume starting range is > 0

### Return?
- return a number
- number should be sum of all numbers below X that are divisible by 3 or 5

### Examples:
- 10 ===> 3, 5, 6, 9 = 23.
-

### pseudo code
- write function to take in a number
- iterate through all numbers between 0 and X
- if number is /5 && /3 add it to the sum
- if number is /3 add it to the sum
- if number is /5 add it to the sum
- return sum

## solution
```javascript
function solution(number){

    let sum = 0

    for(let i = 1; i < number ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            sum += i
        }else if( i % 3 === 0 ){
            sum += i
        }else if( i % 5 === 0 ){
            sum += i
        }
    }
  console.log(sum)
  return sum
}

```

## interesting solutions
```javascript

//

//

```

## Tags
#codewars #100Devs #javascript

## References
1. https://www.codewars.com/kata/514b92a657cdc65150000006

