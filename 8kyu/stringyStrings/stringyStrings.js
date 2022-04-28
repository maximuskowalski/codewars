function stringy(size) {

    let stringer = '1'

    for(let i = 1; i < size; i++)
        if(i%2 === 0){
            stringer +=1
        }else{
            stringer +=0
        }
    console.log(stringer)
    return stringer

}


stringy(3)
stringy(7)
stringy(2)
