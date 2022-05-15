var isAnagram = function(test, original) {

    let testSorted = test.toLowerCase().split('').sort().join('')
    let oGSorted  = original.toLowerCase().split('').sort().join('')

    console.log(testSorted == oGSorted)
    return testSorted == oGSorted

};

// function tests
isAnagram("foefet", "toffee") //true, 'The word foefet is an anagram of toffee')
isAnagram("Buckethead", "DeathCubeK") //true, 'The word Buckethead is an anagram of DeathCubeK')
isAnagram("Twoo", "WooT") //true, 'The word Twoo is an anagram of WooT')

isAnagram("dumble", "bumble") //false, 'Characters do not match for test case dumble, bumble')
isAnagram("ound", "round") //false, 'Missing characters for test case ound, round')
isAnagram("apple", "pale") //false,
