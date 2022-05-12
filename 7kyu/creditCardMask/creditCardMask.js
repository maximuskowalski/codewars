function maskify(cc) {

    let newString = ''

    for (let i = 0; i < cc.length; i++) {
        let char=cc[i]

        if(i < cc.length - 4){
            newString += '#'
        }else{
            newString += char
        }
    }

    console.log(newString)
    return newString

}

// function tests

maskify('4556364607935616')//, '############5616');
maskify('1')//, '1');
maskify('11111')//, '#1111');
