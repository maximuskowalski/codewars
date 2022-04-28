function xor(a, b) {
    return a !== b
}

// function tests

xor(false, false) //  false, "false xor false === false");
xor(true, false) //  true, "true xor false === true");
xor(false, true) //  true, "false xor true === true");
xor(true, true) //  false, "true xor true === false");
xor(true, true) //  true, "'xor' is NOT identical to 'or'");
