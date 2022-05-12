function longest(s1, s2) {

    // let newArr =(s1+s2).split('')

    let uniqueArr = [...new Set((s1+s2).split(''))]

    console.log(uniqueArr.sort().join(''))
    return uniqueArr.sort().join('')
}

longest("aretheyhere", "yestheyarehere")//, "aehrsty")
longest("loopingisfunbutdangerous", "lessdangerousthancoding")//, "abcdefghilnoprstu")
longest("inmanylanguages", "theresapairoffunctions")//, "acefghilmnoprstuy")
