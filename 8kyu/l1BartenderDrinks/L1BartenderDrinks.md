# L1BartenderDrinks
Created: 2022-04-16 14:50

#### LINK:
https://www.codewars.com/kata/568dc014440f03b13900001d
## Question
Complete the function that receives as input a string, and produces outputs according to the following table:

Input  | Output
-------|-------
"Jabroni" | "Patron Tequila"
"School Counselor" | "Anything with Alcohol"
"Programmer" | "Hipster Craft Beer"
"Bike Gang Member" | "Moonshine"
"Politician" | "Your tax dollars"
"Rapper" | "Cristal"
_anything else_ | "Beer"

**Note:** _anything else_ is the default case: if the input to the function is not any of the values in the table, then the return value should be `"Beer"`.

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input `"pOLitiCIaN"` should still return `"Your tax dollars"`.

```javascript
function getDrinkByProfession(param){
}
// functions (tests)
getDrinkByProfession("jabrOni")  //  "Patron Tequila"
getDrinkByProfession("scHOOl counselor")  //  "Anything with Alcohol"
getDrinkByProfession("prOgramMer")  //  "Hipster Craft Beer"
getDrinkByProfession("bike ganG member")  //  "Moonshine"
getDrinkByProfession("poLiTiCian")  //  "Your tax dollars"
getDrinkByProfession("rapper")  //  "Cristal"
getDrinkByProfession("pundit")  //  "Beer"
getDrinkByProfession("Pug")  //  "Beer"
```


## PREP
### Parameters:
- Take in a string
- String may be of upper or lower case
- String may be of multiple words

### Return?
- Drink as matched to table

### Examples:
Input  | Output
-------|-------
"Jabroni" | "Patron Tequila"
"School Counselor" | "Anything with Alcohol"
"Programmer" | "Hipster Craft Beer"
"Bike Gang Member" | "Moonshine"
"Politician" | "Your tax dollars"
"Rapper" | "Cristal"
_anything else_ | "Beer"

### pseudo code
- Write function to take in string
- remove case sensitivity from string
- check string for matches against 6 x inputs
- return drink matched to input, else "Beer"

## solution
```javascript
function getDrinkByProfession(param){
	param = param.toLowerCase()
	
	if (param === "jabroni"){
		console.log("Jabroni" + " = " + "Patron Tequila" )
		return "Patron Tequila";
	}else if (param === "school counselor"){
		console.log("School Counselor" + " = " + "Anything with Alcohol" )
		return "Anything with Alcohol";
	}else if (param === "programmer"){
		console.log("Programmer" + " = " + "Hipster Craft Beer" )
		return "Hipster Craft Beer";
	}else if (param === "bike gang member"){
		console.log("Bike Gang Member" + " = " + "Moonshine" )
		return "Moonshine";
	}else if (param === "politician"){
		console.log("Politician" + " = " + "Your tax dollars" )
		return "Your tax dollars";
	}else if (param === "rapper"){
		console.log("Rapper" + " = " + "Cristal" )
		return "Cristal";
	}else{
		console.log( param + " = " + "Beer" )
		return "Beer";
	}
}
```

## interesting solutions
```javascript
const drinks = {
  "jabroni": "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  "programmer": "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  "politician": "Your tax dollars",
  "rapper": "Cristal"
}

const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"
// 
function getDrinkByProfession(param){
  let map = new Map([
      ["jabroni", "Patron Tequila"],
      ["school counselor", "Anything with Alcohol"],
      ["programmer", "Hipster Craft Beer"],
      ["bike gang member", "Moonshine"],
      ["politician", "Your tax dollars"],
      ["rapper", "Cristal"]
      ]);
      
   let normal = param.toLowerCase();
   return map.has(normal) ? map.get(normal) : "Beer";
}
//
function getDrinkByProfession(param) {
  param = param.toLowerCase();
  
  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return "Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}
```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/568dc014440f03b13900001d