function solution(str, ending){
    console.log(str.endsWith(ending))
    return str.endsWith(ending)
}

// function tests

solution('abcde', 'cde') // , true)
solution('abcde', 'abc') // , false)
