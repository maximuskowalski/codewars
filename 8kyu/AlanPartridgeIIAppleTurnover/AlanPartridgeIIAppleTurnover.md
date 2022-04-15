# AlanPartridgeIIAppleTurnover
Created: 2022-04-15 18:17

#### LINK:
https://www.codewars.com/kata/580a094553bd9ec5d800007d
## Question
Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'. According to [space.com](http://www.space.com/17137-how-hot-is-the-sun.html) the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.

Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

```cpp
X will be a valid integer number.
```

X will be either a number or a string. Both are valid.

```javascript
function apple(x){

}
// question code
// functions (tests)
apple('50') // 'It\'s hotter than the sun!!'
apple(4) // 'Help yourself to a honeycomb Yorkie for the glovebox.'
```


## PREP
### Parameters:
- Take in user input, may be string or number
- Input will need to be used in mathematical calculation
- If string will need to be converted to number

### Return?
- if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

### Examples:
- `('50')` // 'It\'s hotter than the sun!!'
- `(4)` // 'Help yourself to a honeycomb Yorkie for the glovebox.'

### pseudo code
- Write function to take in user number
- If input is string convert to number
- Square the number
- Compare squared number against 1000
- If < 1000 return `'Help yourself to a honeycomb Yorkie for the glovebox.'`
- If > 1000 return `'It's hotter than the sun!!'`

## solution
```javascript
function apple(x){
	Number(x) ** 2 > 1000 ? console.log(true) : console.log(false)

	return Number(x) ** 2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'

}
```

## interesting solutions
```javascript
function apple(x){
  return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
}
// 
apple=x=>x*x>1000?"It's hotter than the sun!!":"Help yourself to a honeycomb Yorkie for the glovebox."
//
let apple = f = (a) => a**2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/580a094553bd9ec5d800007d