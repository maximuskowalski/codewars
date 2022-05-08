function ensureQuestion(s) {

    if(s.charAt(s.length - 1) == '?' ) return s;
    return s + '?'
}

// function tests

ensureQuestion("") // "?","Expected: '?'");
ensureQuestion("Yes") // "Yes?","Expected: '?'");
ensureQuestion("No?") // "No?","Expected: '?'");
