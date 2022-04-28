function strCount(str, letter){

    let sum = 0

    for(let i = 0; i < str.length; i++)
        if(str.charAt(i) === letter){
            sum += 1
        }
    console.log(sum)
    return sum
}

strCount('Hello', 'o') // 1);
strCount('Hello', 'l') // 2);
strCount('', 'z') // 0);
