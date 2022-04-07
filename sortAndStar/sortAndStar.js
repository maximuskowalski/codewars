function twoSort(s) {
  s.sort()
  console.log(s)
  let a = s[0]
  console.log(a)
  a = a.split('').join('***')
  console.log(a)
  return(a)
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) // ===> 'b***i***t***c***o***i***n'
twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]) // ===>  'a***r***e'
