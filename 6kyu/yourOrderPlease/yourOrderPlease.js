function order(words){

    let array = words.split(' ')
    let newArr = []
    let currentString = ''

    for(let i = 1; i <= array.length; i++ ){
        array.findIndex( e => {
            if ( e.includes( i.toString() ) ) {
                newArr.push(e);
              }
        }  )
    }
    console.log(newArr.join(' '))
    return newArr.join(' ')
}


// function tests

order("is2 Thi1s T4est 3a")//, "Thi1s is2 3a T4est")
order("4of Fo1r pe6ople g3ood th5e the2")//, "Fo1r the2 g3ood 4of th5e pe6ople")
order("")//, "", "empty input should return empty string" )