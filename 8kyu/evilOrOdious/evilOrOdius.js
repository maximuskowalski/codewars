function evil(n) {
    let string = n.toString(2)

    let count = 0

    for(let i = 0; i < string.length; i++){
        (string[i]==1) ? count = count + 1 : count = count
    }
    console.log(count)

    console.log(`It's ${(count%2 === 0) ? 'Evil!' : 'Odious!'}`)
    return `It's ${(count%2 === 0) ? 'Evil!' : 'Odious!'}`

}


var stringsearch = "o"
       ,str = "this is foo bar";
    for(var i=count=0; i<str.length; count+=+(stringsearch===str[i++]));
     // returns 2

// The number n is Evil if it has an even number of 1's in its binary representation.
// The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

// The number n is Odious if it has an odd number of 1's in its binary representation.
// The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

// function tests

evil(1) //"It's Odious!");
evil(2) //"It's Odious!");
evil(3) //"It's Evil!");
