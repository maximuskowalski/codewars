# Factorial
Created: 2022-04-10 11:51

#### LINK:
https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
## Question
Your task is to write function `factorial`.

[https://en.wikipedia.org/wiki/Factorial](https://en.wikipedia.org/wiki/Factorial)
```javascript
function factorial(n){
  //your code here
}

factorial(0) // 1
factorial(1) // 1
factorial(4) // 24
factorial(7) // 5040
factorial(17) // 355687428096000

```

Return the factorial of the provided integer.  
  
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.  
  
Factorials are often represented with the shorthand notation **n!**  
  
For example:
**5! = 1 * 2 * 3 * 4 * 5 = 120**


## PREP
### Parameters:
- Take in a number
- Number will always be positive >= 0
- Number will always be an integer
- 0 is meant to return "1" in a factorial

### Return?
- factorial(5) = 1 * 2 * 3 * 4 * 5 = **120**

### Examples:
- factorial(0) // 1
- factorial(1) // 1
- factorial(4) // 24
- factorial(7) // 5040
- factorial(17) // 355687428096000

### pseudo code
- Write function to take in positive integer
- Loop through all numbers between 1 and `(n)` inclusive and multiply them together
- return the product

## solution
```javascript
function factorial(n) {
	let x = 1

	for ( let i = 1; i <= n; i++ ) {
		x *= i;
	}
	console.log(x)
	return x;
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
1. https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
2. https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
3. https://javascript.info/task/factorial