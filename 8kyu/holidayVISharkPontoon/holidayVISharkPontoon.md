# holidayVISharkPontoon
Created: 2022-04-18 10:07

#### LINK:
https://www.codewars.com/kata/57e921d8b36340f1fd000059

## Question
Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

You are given 5 variables;

-   sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.
-   sharkSpeed = how fast it can move in metres/second.
-   pontoonDistance = how far you need to swim to safety in metres.
-   youSpeed = how fast you can swim in metres/second.
-   dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
-   The pontoon, you, and the shark are all aligned in one dimension.
    
If you make it, return "Alive!", if not, return "Shark Bait!".

```javascript
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){

}
// functions (tests)
shark(12, 50, 4, 8, true) // "Alive!"
shark(7, 55, 4, 16, true) // "Alive!"
shark(24, 0, 4, 8, true) // "Shark Bait!"
```


## PREP
### Parameters:
- We are given four numbers and a boolean
- Numbers are either distances or speeds
- Calculate the "winner" in this race from these arguments

### Return?
- If you make it, return "Alive!", if not, return "Shark Bait!".

### Examples:
- (12, 50, 4, 8, true) // "Alive!"
- (7, 55, 4, 16, true) // "Alive!"
- (24, 0, 4, 8, true) // "Shark Bait!"

### pseudo code
- Write a function to take in 5 arguments
- First four arguments are numbers and last is a boolean that changes argument 4, `sharkSpeed`
- First, check boolean and adjust `sharkSpeed` if true
	- If true divide sharkSpeed by two
- Calculate time for `you` to travel to pontoon
	- PontoonDistance / youSpeed
- Calculate time for `shark` to travel to pontoon
- if `you`Time is < `shark`Time return "Alive!"
- if `you`Time is > `shark`Time return "Shark Bait!"


## solution
```javascript
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {

	if (dolphin === true) {

		sharkSpeed = sharkSpeed / 2;
		let youTime = pontoonDistance / youSpeed;
		let sharkTime = sharkDistance / sharkSpeed;
  
	console.log( (youTime < sharkTime) ? 'Alive!' : 'Shark Bait!' );
	return ( (youTime < sharkTime) ? 'Alive!' : 'Shark Bait!' );

	} else {
		let youTime = pontoonDistance / youSpeed;
		let sharkTime =sharkDistance / sharkSpeed;

	console.log( (youTime < sharkTime) ? 'Alive!' : 'Shark Bait!' );
	return ( (youTime < sharkTime) ? 'Alive!' : 'Shark Bait!' );

	}
}
```

## interesting solutions
```javascript

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed /= 2;
  }
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}
// 
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  return sharkDistance/(dolphin?sharkSpeed/2:sharkSpeed) > pontoonDistance/youSpeed ? "Alive!":"Shark Bait!";
}
//
function shark(pontoonDistance, sharkDistance, yourSpeed, sharkSpeed, dolphin){
  if (dolphin) sharkSpeed = sharkSpeed/2;
  let yourTime = pontoonDistance/yourSpeed;
  let sharksTime = sharkDistance/sharkSpeed;
  
  return yourTime < sharksTime ? "Alive!": "Shark Bait!"
}

```

## Tags
#codewars #100Devs #javascript 

## References
1.  https://www.codewars.com/kata/57e921d8b36340f1fd000059