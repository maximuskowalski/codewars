# sentenceSmash
Created: 2022-04-05 11:00

#### LINK:
https://www.codewars.com/kata/53dc23c68a0c93699800041d
## Question
### Sentence Smash

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.

**Be careful, there shouldn't be a space at the beginning or the end of the sentence!**

```javascript
function smash (words) {
   return ""
};

smash(["hello", "world"])  // ==> "hello world")
smash(["hello", "amazing", "world"])  // ==> "hello amazing world")
smash(["this", "is", "a", "really", "long", "sentence"])  // ==> "this is a really long sentence")
```


## PREP
### Parameters:
- Create a function
- Take in an array of words
- Join words into a string but include spaces before hand
- Words do not need punctuation or capitalisation
- The string should start with a character that is not a space

### Return?
- Return the new string with spaces between words.

### Examples:
-  ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
- ["hello", "world"]  ==> "hello world"
- ["hello", "amazing", "world"] ==> "hello amazing world"
- ["this", "is", "a", "really", "long", "sentence"] ==> "this is a really long sentence"

____________
**Inputs:**
-    ['hello', 'world', 'this', 'is', 'great']

**Output**
-   'hello world this is great'
____________
**Inputs:**
-    ["hello", "world"]

**Output**
-   "hello world"
____________
**Inputs:**
-   ["hello", "amazing", "world"]

**Output**
-   "hello amazing world"


### pseudo code
- create function "smash"
- take in parameters "words" in array format
- join array elements into a string with spaces between elements
- return string

## solution
```javascript
function smash (words) {
 console.log(words.join(' '))
 return words.join(' ')
};
```

## interesting solutions
```javascript

const smash = words => words.join(' ');

// 

let smash = words => words.join(" ");

//

var smash = _ => _.join(' ');

```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/53dc23c68a0c93699800041d