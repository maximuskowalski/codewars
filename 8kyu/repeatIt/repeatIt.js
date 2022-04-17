function repeatIt( str, n ){
    if ( typeof str === 'string'){
        console.log(str.repeat(n))
        return str.repeat(n)
    }else{
        console.log('Not a string')
        return 'Not a string'
    }
}

repeatIt("Hi", 2 )
repeatIt(1234, 5)
