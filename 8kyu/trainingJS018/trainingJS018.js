function splitAndMerge(string, separator) {
    string = string.split(' ')
    let newArr = string.map(i => i.split("").join(separator)).join(" ")

    console.log(newArr)
    return newArr

}


// function tests

splitAndMerge("My name is John", " ")   //  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")   //  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")   //     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")   //     ==  "H,e,l,l,o W,o,r,l,d,!"
