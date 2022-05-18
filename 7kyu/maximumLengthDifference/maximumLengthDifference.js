function mxdiflg(a1, a2) {

    if( a1.length == 0 || a2.length == 0 ) return -1

    a1 = a1.sort((a, b) => a.length - b.length)
    a2 = a2.sort((a, b) => a.length - b.length)

    let aMax = a1[a1.length - 1].length
    let aMin = a1[0].length
    let bMax = a2[a2.length - 1].length
    let bMin = a2[0].length

    let diff1 = aMax - bMin;
    let diff2 = bMax - aMin;


    (diff1 > diff2) ? console.log(diff1) : console.log(diff2)
    return (diff1 > diff2) ? diff1 : diff2

}

// function tests

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
mxdiflg(s1, s2)//, 13);
