function derive(coefficient,exponent) {
  console.log( `${coefficient * exponent}x^${exponent -1}` )
  return `${coefficient * exponent}x^${exponent -1}`
}

// function tests

derive(7,8)  // "56x^7");
derive(5,9)  //  "45x^8");
