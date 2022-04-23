var countSheep = function (num){
    if(num <= 0) return ''

    let sum = ''

    for (let i = 1; i <= num; i++) {
        sum = sum + `${i} sheep...`
      }

      console.log(sum)
      return sum

  }



// return string.repeat(times)

// function tests
countSheep(0) // ""
countSheep(1) // "1 sheep..."
countSheep(2) // "1 sheep...2 sheep..."
countSheep(3) // "1 sheep...2 sheep...3 sheep..."
