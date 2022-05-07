function toFreud(string) {

    if(string.length < 1) return ''

    let wordCount = string.trim().split(' ').length

    let newArr = []

    for(let i = 0; i < wordCount ; i++){
        newArr.push('sex')
    }

    console.log(newArr.join(' '))
    return newArr.join(' ')

}

// function tests

toFreud("") // "");
toFreud("") // "");
toFreud("test") // "sex");
toFreud("This is a test") // "sex sex sex sex" )
toFreud("This is a longer test") // "sex sex sex sex sex" )
toFreud("You're becoming a true freudian expert") // "sex sex sex sex sex sex" )
