function capitalizeWord(word) {
  const array = word.split('')
  console.log(array)
  array[0] = array[0].toUpperCase()
  console.log(array.join(''))
  return array.join('')
}
// question code tests
capitalizeWord('word')  // 'Word'
capitalizeWord('i')  //   'I'
capitalizeWord('glasswear')  // 'Glasswear'
