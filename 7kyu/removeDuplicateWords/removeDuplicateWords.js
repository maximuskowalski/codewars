function removeDuplicateWords (s) {

    let Arr = s.split(' ')

    let newArr = [...new Set(Arr)]

    console.log( newArr.join(' ') )
    return newArr.join(' ')
}


removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') // 'alpha beta gamma delta')
