function findSum(n) {
    let sum = 0

    for(let i = 1; i <= n ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            sum += i
        }else if( i % 3 === 0 ){
            sum += i
        }else if( i % 5 === 0 ){
            sum += i
        }
    }
  console.log(sum)
  return sum
}
