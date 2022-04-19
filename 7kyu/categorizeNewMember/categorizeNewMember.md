# categorizeNewMember
Created: 2022-04-19 10:25

#### LINK:
https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

## Question
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

### Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

### Output

Output will consist of a list of string values (in Haskell and C: `Open` or `Senior`) stating whether the respective member is to be placed in the senior or open category.

#### Example

```
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
```

---


```javascript
function openOrSenior(data){
  // ...
}
// functions (tests)
openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]) // ['Open', 'Senior', 'Open', 'Senior']
openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]) // ['Open', 'Open', 'Open', 'Open']
openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]) // ['Senior', 'Open', 'Open', 'Open']
```


## PREP
### Parameters:
- Take in a nested array.
- Array will always be all numbers and may include negative values
- Numbers will always be integers
- Nested arrays (person) will contain two elements each

### Return?
- Return membership category based on `age` and `handicap` values

### Examples:
- input =  [ [18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9] ]
   output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
- [ [45, 12],[55,21],[19, -2],[104, 20] ]
   ['Open', 'Senior', 'Open', 'Senior']
- [ [59, 12],[55,-1],[12, -2],[12, 12] ]
   ['Senior', 'Open', 'Open', 'Open']

### pseudo code
- Write function to take in array
- Check age of each person
	- if age <= 55 member is `open`
	- if age > 55 and handicap < 7 member is `open`
	- else `senior`
- Return decisions as an array
## solution
```javascript
function openOrSenior(data){
	let newArr = []

	for (let i = 0; i < data.length; i++) {
		console.log(data[i][0])
		console.log(data[i][1])

		if( data[i][0] >= 55 && (data[i][1]) > 7 ) {
			console.log ('Senior')
			newArr.push('Senior')
		}else{
			console.log('Open')
			newArr.push('Open')
		}
	}
	console.log(newArr)
	return newArr
}
```

## interesting solutions
```javascript

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

// 
openOrSenior = data => data.map(e => (e[0] > 54 && e[1] > 7) ? "Senior" : "Open")
//
function openOrSenior(data){
  var age, handicap, category, output = [];
  
  data.forEach(function(person) {
    age = person[0];
    handicap = person[1];
    category = (age >= 55 && handicap > 7) ? 'Senior' : 'Open';
    
    output.push(category);
  });
  
  return output;
}
```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
2. Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
3. Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions