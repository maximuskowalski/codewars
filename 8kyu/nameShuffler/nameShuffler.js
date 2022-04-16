function nameShuffler(str){
  console.log( str.split(' ').reverse().join(' '))
  return str.split(' ').reverse().join(' ')
}

// functions (tests)
nameShuffler('john McClane') // 'McClane john'
