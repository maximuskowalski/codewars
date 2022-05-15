function spinWords(string){

    let newArr = string.split(' ')

    let revArr = []

    for( let i = 0 ; i < newArr.length ; i++){
        if(newArr[i].length > 4){
            revArr.push(newArr[i].split('').reverse().join(''))
        }else{
        revArr.push(newArr[i])
        }
    }

    console.log(revArr.join(' '))
    return revArr.join(' ')

}

// function tests

spinWords("Welcome") //, "emocleW");
spinWords("Hey fellow warriors") //, "Hey wollef sroirraw");
spinWords("This is a test") //, "This is a test");
spinWords("This is another test")//, "This is rehtona test");
spinWords("You are almost to the last test") //, "You are tsomla to the last test");
spinWords("Just kidding there is still one more") //, "Just gniddik ereht is llits one more");
spinWords("Seriously this is the last one") //, "ylsuoireS this is the last one");
