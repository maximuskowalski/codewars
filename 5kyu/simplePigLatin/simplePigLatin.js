function pigIt(str){

    let array = str.split(' ')
    let newArr = []

    array.forEach(e => {
        if((/([a-zA-Z])/).test(e)){
            newArr.push(e.substring(1) + e[0] + "ay")
          }else{
            newArr.push(e)
          }
    })

    console.log(newArr.join(' '))
    return(newArr.join(' '))

}

// function tests

pigIt('Pig latin is cool ?')//,'igPay atinlay siay oolcay')
pigIt('This is my string !')//,'hisTay siay ymay tringsay')
