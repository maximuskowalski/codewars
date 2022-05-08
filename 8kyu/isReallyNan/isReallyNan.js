const isReallyNaN = (val) => {

    (Number.isNaN(val)) ? console.log(true) : console.log(false)
    return (Number.isNaN(val)) ? true : false

}

// function tests

isReallyNaN(37) // === false)
isReallyNaN('37') // === false)
isReallyNaN(NaN) // === true)
isReallyNaN(undefined) // === false)
