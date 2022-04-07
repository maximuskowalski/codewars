function well(x){
  let goodsArr = x.filter(ideas => ideas.includes('good'))
  console.log(goodsArr)
  if (goodsArr.length < 1){
    console.log('Fail!')
    return 'Fail!'
  }else if ( goodsArr.length > 2) {
    console.log('I smell a series!')
    return 'I smell a series!'
  }else{
    console.log('Publish!')
    return 'Publish!'
  }
}

well(['bad', 'bad', 'bad']) // 'Fail!'
well(['good', 'bad', 'bad', 'bad', 'bad']) // ==> 'Publish!'
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) // ==> 'I smell a series!'
