function disemvowel(str) {

    let newString = str.replace(/[a|e|i|o|u]/gi, '');
    console.log(newString);
    return newString
}


// function tests

disemvowel("This website is for losers LOL!") // "Ths wbst s fr lsrs LL!")
disemvowel("No offense but,\nYour writing is among the worst I've ever read") // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
disemvowel("What are you, a communist?") // "Wht r y,  cmmnst?")
