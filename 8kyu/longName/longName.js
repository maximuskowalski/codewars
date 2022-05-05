function isOpposite(s1,s2){

    if(s1===s2) return false

    const newStr = s1
        .split('')
        .map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
        .join('');

    console.log(newStr);
    console.log(s2)

    console.log( ( s2 == newStr ) ? true : false )

    return ( s2 == newStr ) ? true : false

}

// function tests

isOpposite("ab","AB") //, true);
isOpposite("aB","Ab") //, true);
isOpposite("aBcd","AbCD") //, true);
isOpposite("aBcde","AbCD") //, false);
isOpposite("AB","Ab") //, false);
isOpposite("","") //, false);
