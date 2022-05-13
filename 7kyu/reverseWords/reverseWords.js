function reverseWords(str) {

    let newArr = str.split(' ')

    let revArr = []

    for( let i = 0 ; i < newArr.length ; i++){
        revArr.push(newArr[i].split('').reverse().join(''))
    }

    console.log(revArr.join(' '))
    return revArr.join(' ')

}

// function tests

reverseWords('The quick brown fox jumps over the lazy dog.') // , 'ehT kciuq nworb xof spmuj revo eht yzal .god');
reverseWords('apple') // , 'elppa');
reverseWords('a b c d') // , 'a b c d');
reverseWords('double  spaced  words') // , 'elbuod  decaps  sdrow');
