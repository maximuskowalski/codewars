function firstToLast(str,c){

    if(str.search(c) == -1) return -1

    let first = str.indexOf(c)
    let last = str.lastIndexOf(c)

    console.log(last - first)
    return last -first

}

// function tests
// Please return the gap between the first position of c and the last position of c.

firstToLast("ababc","a") // 2);
firstToLast("ababc","c") // 0);
firstToLast("ababc","d") // -1);
