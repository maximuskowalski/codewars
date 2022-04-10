# returningstrings

Created: 2022-03-29 13:08

#### LINK:

https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript

## Question

Make a function that will return a greeting statement that uses an input; your program should return, `"Hello, <name> how are you doing today?"`.

_[Make sure you type the exact thing I wrote or the program may not execute properly]_

```javascript
function greet(name){
  //your code here
}
```

## pseudo code

Take input of a name
Assign name to variable
Substitute name variable into required text
return the new text with name in place

## solution

```javascript
function greet(name){
  return (`Hello, ${name} how are you doing today?`);
}
```

## interesting solutions

Arrow Function

```javascript
const greet = name => `Hello, ${name} how are you doing today?`;

// shorter
const greet=n=>`Hello, ${n} how are you doing today?`;
```

Using ``.replace`

```javascript
function greet(name){
  return "Hello, <name> how are you doing today?".replace("<name>", name);
}
```

## Tags

#codewars #100Devs #javascript 

## References

1. https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript
2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
