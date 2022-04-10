# dna2Rna
Created: 2022-04-01 16:54

#### LINK:
https://www.codewars.com/kata/5556282156230d0e5e000089
## Question
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

```
"GCAT"  =>  "GCAU"
```

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of `'G'`, `'C'`, `'A'` and/or `'T'`.

```javascript
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
}
DNAtoRNA("TTTT") // = "UUUU")
DNAtoRNA("GCAT") // = "GCAU")
DNAtoRNA("GACCGCCGCC") // = "GACCGCCGCC")
```


## PREP
### Parameters:
- Take in string representing DNA 
- Convert String to one representing RNA
- Return RNA string

### Return?
- Return a string
- String should be DNA to RNA

### Examples:
- "GCAT"  =>  "GCAU"
- "TTTT"  => "UUUU"
- "GCAT" => "GCAU"
- "GACCGCCGCC" => "GACCGCCGCC"

### pseudo code
- Take in string variable
- Examine string for instances of the letter T
- Replace all occurrences of the character T with character U
- Return new string with replaced characters.

## solution
```javascript
function DNAtoRNA(dna) {
// replace all 'T' with 'U'. Using .replace with the modifier "g" will replace globally (all) and "i" will ignore case replacing either t or T
return dna.replace(/t/gi, 'U')
}

```

## interesting solutions
```javascript

const DNAtoRNA = dna => dna.replace(/T/g, 'U');

//

function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

//

DNAtoRNA = ($) => [...$].map(el => el === 'T' ? el='U': el).join`` 

```

## Tags
#codewars #100Devs #javascript 

## References
1. https://www.codewars.com/kata/5556282156230d0e5e000089