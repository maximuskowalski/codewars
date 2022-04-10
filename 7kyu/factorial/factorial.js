function factorial(n) {
  let x = 1

  for ( let i = 1; i <= n; i++ ) {
    x *= i;
  }
  console.log(x)
  return x;
}

factorial(0) // 1
factorial(1) // 1
factorial(4) // 24
factorial(7) // 5040
factorial(17) // 355687428096000
