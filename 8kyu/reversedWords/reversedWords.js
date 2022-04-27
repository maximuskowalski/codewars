function reverseWords(str){
    str = str.trim()
    console.log( str.split(' ').reverse().join(' '))
    return str.split(' ').reverse().join(' ')
  }

// function tests

reverseWords("hello world!")  //  "world! hello")
reverseWords("yoda doesn't speak like this" )  //   "this like speak doesn't yoda")
reverseWords("foobar"                       )  //   "foobar")
reverseWords("kata editor"                  )  //   "editor kata")
reverseWords("row row row your boat"        )  //   "boat your row row row")
