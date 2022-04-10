function smash (words) {
  console.log(words.join(' '))
  return words.join(' ')
};

smash(["hello", "world"])  // ==> "hello world")
smash(["hello", "amazing", "world"])  // ==> "hello amazing world")
smash(["this", "is", "a", "really", "long", "sentence"])  // ==> "this is a really long sentence")
