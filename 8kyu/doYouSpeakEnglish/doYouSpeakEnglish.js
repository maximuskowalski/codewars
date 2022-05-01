function spEng(sentence){
    return sentence.toLowerCase().includes('english')
}

// function tests

spEng("english") // true);
spEng("egnlish") // false);
