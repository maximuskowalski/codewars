# areYouBanjo
Created: 2022-04-03 10:03

#### LINK:
https://www.codewars.com/kata/53af2b8861023f1d88000832
## Question
Create a function which answers the question "Are you playing banjo?".  
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

```
name + " plays banjo" 
name + " does not play banjo"
```

Names given are always valid strings.

```javascript
function areYouPlayingBanjo(name) {
  // Implement me
  return name;
}

areYouPlayingBanjo("Adam")  // ==> "Adam does not play banjo"
areYouPlayingBanjo("Paul")  // ==> "Paul does not play banjo"
areYouPlayingBanjo("Ringo")  // ==> "Ringo plays banjo"
areYouPlayingBanjo("bravo")  // ==> "bravo does not play banjo"
areYouPlayingBanjo("rolf")  // ==> "rolf plays banjo"
```


## PREP
### Parameters:
- The function takes in a name string
- Input can be upper or lower case
- name will always be a valid string

### Return?
- If the `<name> `begins with an R then `<name>` plays banjo
-  `<name>` initial is case insensitive.

### Examples:
- areYouPlayingBanjo("Adam")
- areYouPlayingBanjo("Ringo") 
- areYouPlayingBanjo("rolf")
____________
**Inputs:**
-   name string: "Adam"

**Output**
-   "Adam does not play banjo"
____________
**Inputs:**
-   name string: "Ringo"

**Output**
-   "Ringo plays banjo"
____________
**Inputs:**
-   name string: "rolf"

**Output**
-   "rolf plays banjo"


### pseudo code
- Take in name value
- Identify name first initial
- Compare first initial for match with either "r" or "R"
- If there is a match return the original value of `<name>` + + " plays banjo" 
- else return  `<name>` + " does not play banjo"

## solution
```javascript
function areYouPlayingBanjo(name) {
	let x = name.toLowerCase().split('')
	if (x[0] === "r" ) {
		console.log(`${name} plays banjo`)
		return `${name} plays banjo`
	}else{
		console.log(`${name} does not play banjo`)
		return `${name} does not play banjo`
	}
}

  
areYouPlayingBanjo("Adam") // ==> "Adam does not play banjo"
areYouPlayingBanjo("Paul") // ==> "Paul does not play banjo"
areYouPlayingBanjo("Ringo") // ==> "Ringo plays banjo"
areYouPlayingBanjo("bravo") // ==> "bravo does not play banjo"
areYouPlayingBanjo("rolf") // ==> "rolf plays banjo"
```

## interesting solutions
```javascript

function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

// 

function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] == 'R' || name[0] == 'r')
    return name + " plays banjo";
  else
    return name + " does not play banjo";
}

//

const areYouPlayingBanjo = name => name.startsWith('R') || name.startsWith('r') ? `${name} plays banjo` : `${name} does not play banjo`

```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/53af2b8861023f1d88000832