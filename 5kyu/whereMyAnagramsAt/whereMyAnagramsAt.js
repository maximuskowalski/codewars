function anagrams(word, words) {

    let measure = word.toLowerCase().split('').sort().join('')
    let test = ''

    let newArr = []

    for( let i = 0 ; i < words.length ; i++ ){

        test = words[i].toLowerCase().split('').sort().join('')

        if( test == measure ){
            newArr.push(words[i])
        }

    }

    console.log(newArr)
    return(newArr)
}

// function tests

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) //, ['aabb', 'bbaa']);
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) //, ['carer', 'racer']);

anagrams('laser', ['lazing', 'lazy',  'lacer'])//, []);

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])// => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])// => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer'])// => []
