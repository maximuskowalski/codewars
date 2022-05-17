function toCamelCase(str){

    str = str.replace(/[-|_]/gi, ' ')

    let newArr = str.split(' ')

    for( let i = 1 ; i < newArr.length ; i++ ) {
        newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1)
    }

    console.log(newArr.join(''))
    return newArr.join('')

}

// function tests

toCamelCase('') //, '', "An empty string was provided but not returned")
toCamelCase("the_stealth_warrior") //, "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
toCamelCase("The-Stealth-Warrior") //, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
toCamelCase("A-B-C") //, "ABC", "toCamelCase('A-B-C') did not return correct value")
