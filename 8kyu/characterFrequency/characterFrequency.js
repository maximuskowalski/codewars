function charFreq(message) {

    let frequency = {}

    for(let i = 0; i < message.length; i++){
        let character = message.charAt(i);
        if (frequency[character]) {
            frequency[character]++
        }else{
            frequency[character] = 1
        }
    }

    console.log(frequency)
    return(frequency)
}

// Function Tests

charFreq("I like cats") // {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1});
