function feast(beast, dish) {
  let beastArr = beast.split('')
  let dishArr = dish.split('')

  if (beastArr[0] === dishArr[0] && beastArr[beastArr.length - 1] === dishArr[dishArr.length - 1]) {
    console.log(true)
    return true
  }else{
    console.log(false)
    return false
  }
}


feast("great blue heron", "garlic naan")  // ==> true
feast("chickadee", "chocolate cake")  // ==> true
feast("brown bear", "bear claw")  // ==> false
