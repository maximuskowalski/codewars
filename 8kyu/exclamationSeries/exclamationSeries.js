function remove (string) {

    if( (string[string.length-1]) === '!') {
      console.log(true)
      let arr = string.split('')
      arr.pop()
      console.log(arr.join(''))
      return arr.join('')

    }else{
      console.log(false)
      console.log(string)
      return string
    }

}


remove("Hi!") // === "Hi"
remove("Hi!!!") // === "Hi!!"
remove("!Hi") // === "!Hi"
remove("!Hi!") // === "!Hi"
remove("Hi! Hi!") // === "Hi! Hi"
remove("Hi") // === "Hi"
