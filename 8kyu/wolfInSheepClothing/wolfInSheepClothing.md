# wolfInSheepClothing
Created: 2022-04-21 15:31

#### LINK:
https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

## Question
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing **at the front of the queue** which is at the end of the array:

```
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
```

If the wolf is the closest animal to you, return `"Pls go away and stop eating my sheep"`. Otherwise, return `"Oi! Sheep number N! You are about to be eaten by a wolf!"` where `N` is the sheep's position in the queue.

**Note:** there will always be exactly one wolf in the array.

### Examples

Input: `["sheep", "sheep", "sheep", "wolf", "sheep"]`  
Output: `"Oi! Sheep number 1! You are about to be eaten by a wolf!"`

Input: `["sheep", "sheep", "wolf"]`  
Output: `"Pls go away and stop eating my sheep"`


```javascript
function warnTheSheep(queue) {
}

// functions (tests)
warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])
// "Oi! Sheep number 2! You are about to be eaten by a wolf!"

warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
// "Oi! Sheep number 5! You are about to be eaten by a wolf!"

warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])
// "Oi! Sheep number 6! You are about to be eaten by a wolf!"

warnTheSheep(["sheep", "wolf", "sheep"])
// "Oi! Sheep number 1! You are about to be eaten by a wolf!"

warnTheSheep(["wolf"])
// "Pls go away and stop eating my sheep"
```


## PREP
### Parameters:
- Take in an array of 1 x `wolf` and 0 or more sheep
- array will always contain wolf
- wolf will always be lower case
- array end is the start of shepherds queue

### Return?
- if wolf is last in array return
  `"Pls go away and stop eating my sheep"`
- else `"Oi! Sheep number N! You are about to be eaten by a wolf!"` where `N` is the sheep's position in the queue from Array end point.

### Examples

Input: `["sheep", "sheep", "sheep", "wolf", "sheep"]`  
Output: `"Oi! Sheep number 1! You are about to be eaten by a wolf!"`

Input: `["sheep", "sheep", "wolf"]`  
Output: `"Pls go away and stop eating my sheep"`

### pseudo code
- write function to take in array
- find position of wolf in array
- if wolf = last(first in q) return wolfer
- if wolf is not last return message to sheep immediately behind ( first in q)

#### notes
We could reverse array to make thinking clearer, and check for `wolf element` at `index[0]` and sheep at `wolf[index - 1]`

## solution
```javascript
function warnTheSheep(queue) {
	queue = queue.reverse()
	console.log(queue.indexOf('wolf'))

	if(queue.indexOf('wolf') == 0) {
		console.log('Pls go away and stop eating my sheep')
		return 'Pls go away and stop eating my sheep'
	}else{
		console.log(`"Oi! Sheep number ${queue.indexOf('wolf')}! You are about to be eaten by a wolf!"`)
		return `Oi! Sheep number ${queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
	}
}
```

## interesting solutions
```javascript
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}
// 
function warnTheSheep(queue) {
  return queue.pop() === "wolf" ? "Pls go away and stop eating my sheep" 
  : `Oi! Sheep number ${queue.length - queue.indexOf("wolf")}! You are about to be eaten by a wolf!`; 
}
//
function warnTheSheep(queue) {
  let arr = queue.reverse();

  return queue[0] == "wolf" ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${arr.indexOf("wolf")}! You are about to be eaten by a wolf!`
}
```

## Tags
#codewars #100Devs #javascript #arrays 

## References
1. https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15