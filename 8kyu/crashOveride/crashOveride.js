var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}


function aliasGen(){

    console.log(arguments[0].charAt(0));

    console.log(arguments[1].charAt(0));

    if( !(/^[a-zA-Z]+$/.test(arguments[0].charAt(0))) || !(/^[a-zA-Z]+$/.test(arguments[1].charAt(0))) ) return "Your name must start with a letter from A - Z."

    let firstInitial = arguments[0].charAt(0).toUpperCase()
    let lastInitial = arguments[1].charAt(0).toUpperCase()

    console.log(firstInitial, lastInitial)

    console.log(firstName[firstInitial], surname[lastInitial])

    return `${firstName[firstInitial]} ${surname[lastInitial]}`
}

// function tests

aliasGen("alice", "coombes")
aliasGen("Mike", "Millington") // "Malware Mike");
aliasGen("Fahima", "Tash") // "Function T-Rex");
aliasGen("Daisy", "Petrovic") // "Data Payload");
aliasGen("7393424", "Anumbha") // "Your name must start with a letter from A - Z.");
aliasGen("Anuddanumbha", "23200") // "Your name must start with a letter from A - Z.")
