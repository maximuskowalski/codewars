function validateHello(greetings) {

    return (greetings.match(/hello|ciao|salut|hallo|hola|ahoj|czesc/gi)) ? true : false

}

validateHello('ahoj')//, true);
validateHello('meh')//, false);
validateHello("ViStA. que bIEN: SALUt. quE YOU, HOmBrE; Are, TScHuSS, HaStA, WIE! hOMbRe, quE que, How: CIao heLlo QuE; qUe!")


// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish


