# multiplyTableforNum
Created: 2022-04-08 15:15

#### LINK:
https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
## Question
Your goal is to return multiplication table for `number` that is always an integer from 1 to 10.

For example, a multiplication table (string) for `number == 5` looks like below:

```
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
```

P. S. You can use `\n` in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

```javascript
function multiTable(number) {
  // good luck
}

multiTable(5) 
// +++> '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'

multiTable(1)  
// '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10'
```


## PREP
### Parameters:
- Take in an integer
- Integer will never be a string
- Integer will always be between 1 and 10

### Return?
- Multiplication table for `x * (1-10) = y`
- Each iteration should be on its own line

### Examples:
```
For input with Number 5
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
```
____________
**Inputs:**
-   5

**Output**

```
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
```


____________

### pseudo code
- Write function to take in number
- Multiply the number by nos 1 - 10
- return the answer to each iteration to its own new line

## solution
```javascript
function multiTable(number) {

 let arr = [];
 
 for(let i = 1; i <= 10; i++) {
 const result = i * number;
 arr.push(`${i} * ${number} = ${result}`);
 }
 console.log(arr.join('\n'))
 return arr.join('\n')
}
```

## interesting solutions
```javascript

function multiTable(n) {
  return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
}

// 

const multiTable = n => ([1,2,3,4,5,6,7,8,9,10].map(i=>`${i} * ${n} = ${i*n}`)).join('\n')

//

function multiTable(num) {
  let table = '';
  for (let i = 1; i < 11; i++){
    table += `${i} * ${num} = ${num * i}`;
    if(i < 10) table += '\n';
  }
  return table;
}

//

let multiTable = n => {
 return `1 * ${n} = ${1*n}
2 * ${n} = ${2*n}
3 * ${n} = ${3*n}
4 * ${n} = ${4*n}
5 * ${n} = ${5*n}
6 * ${n} = ${6*n}
7 * ${n} = ${7*n}
8 * ${n} = ${8*n}
9 * ${n} = ${9*n}
10 * ${n} = ${10*n}`
}

```

## Tags
#codewars #100Devs #javascript #strings 

## References
1. https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce