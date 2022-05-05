function uniTotal (string) {

    let total = 0

    for(let i = 0; i < string.length; i++){
        total = total + +(string.charCodeAt(i))
    }

    console.log(total)
    return total

}

// function tests
uniTotal("a")// == 97
uniTotal("aaa")// == 291
