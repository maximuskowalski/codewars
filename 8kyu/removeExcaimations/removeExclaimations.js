function removeExclamationMarks(s) {
    console.log( s.replace(/[!]/g, '') )
    return s.replace(/[!]/g, '')
}

// function tests

removeExclamationMarks("Hello World!") // "Hello World"
