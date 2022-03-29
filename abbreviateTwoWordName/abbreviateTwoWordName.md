# abbreviateTwoWordName

Created: 2022-03-29 13:24

#### LINK:

https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

## Question

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

`Sam Harris` => `S.H`

`patrick feeney` => `P.F`

```javascript
function abbrevName(name){

   // code away

}
```

## pseudo code

Accept input of Two word name
Split into two pieces using " " (space) character as separator
Extract first letter from each piece
Capitalize the pieces
Join together into new string with . between letters
return the string

## solution

```javascript
function abbrevName(name){
    const initialCaps = name
      .split(' ')
      .map(names => names[0])
      .join('.')
      .toUpperCase()

  return initialCaps

}

abbrevName("Sam Harris")
// 'S.H'
```

## interesting solutions

```javascript
function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

/////////////////////////////////////

function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

/////////////////////////////////////

const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()
```

## Tags

#codewars #100Devs #javascript 

## References

1. https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
4. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
5. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
