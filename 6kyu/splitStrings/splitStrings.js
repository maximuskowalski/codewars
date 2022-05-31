function solution(str) {

    let newArr = []

    if ( str.length % 2 !== 0 ) str += '_'

    for( let i = 0; i < str.length - 1; i++ ) {
        if( i % 2 === 0 ){
            newArr.push(str[i] + str[i+1])
            i++
        }
    }

    console.log(newArr)
    return newArr

}

// function tests

solution("abcdef")//, ["ab", "cd", "ef"]);
solution("abcdefg")//, ["ab", "cd", "ef", "g_"]);
solution("")//, []);
