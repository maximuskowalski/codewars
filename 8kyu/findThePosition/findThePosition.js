function position(letter){

    let myArr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' , 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let position = myArr.indexOf(letter) + 1

    console.log(`Position of alphabet: ${position}`);

    return `Position of alphabet: ${position}`

}


// function tests

position("a") //,"Position of alphabet: 1");
position("z") // ,"Position of alphabet: 26");
position("e") // ,"Position of alphabet: 5");
