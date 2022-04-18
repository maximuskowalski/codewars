function summation(num){

    let sum = 0

    for (let i = 0; i <= num; i++) {
        sum = sum + i
      }
      console.log(sum)
      return sum
 }

// Function Tests

summation(1) // 1
summation(8)  // 36
