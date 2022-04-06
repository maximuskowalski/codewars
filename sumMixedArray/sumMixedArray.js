function sumMix(x){
  let total = x.map(Number).reduce( (previousValue, currentValue) => previousValue + currentValue, 0 );
  console.log(total)
  return total
}

sumMix([9, 3, '7', '3'])  // ===> 22
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])  // ===> 42
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])  // ===> 41
