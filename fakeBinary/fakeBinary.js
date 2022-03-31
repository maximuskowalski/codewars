function fakeBin(x){
  //convert to an array, loop through array and convert back to string.
  let y = x.split('').map(n => n < 5 ? n = '0' : n = '1' ).join('');
  // check new array
  console.log(y)
  // return y;
  return y;
 }

// TESTS
fakeBin('45385593107843568') //, '01011110001100111');
fakeBin('509321967506747') //, '101000111101101');
fakeBin('366058562030849490134388085') //, '011011110000101010000011011');
