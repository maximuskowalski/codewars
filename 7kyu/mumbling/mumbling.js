function accum(s) {

    let newArr = []

    for(let i = 0; i < s.length; i++){
        newArr.push( s[i].toUpperCase() + (s[i].toLowerCase().repeat(i)) )
    }

    console.log(newArr.join('-'))
    return newArr.join('-')

}

// function tests

accum("ZpglnRxqenU") //, "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
accum("NyffsGeyylB") //, "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
accum("MjtkuBovqrU") //, "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
accum("EvidjUnokmM") //, "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
accum("HbideVbxncC") //, "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
