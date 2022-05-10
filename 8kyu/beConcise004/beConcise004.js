function find(a, e) {
let x=a.indexOf(e)
return (x!=-1)?x:'Not found'
}

// console.log(scores.indexOf(10)); // 0

// const found = array.find(element => element > 10);


// function find(a, e) {
//     return (a.indexOf(e)) ? a.indexOf(e) : "Not found"
//    }


// let array = [2,3,5,7,11];

find([2,3,5,7,11], 5)//, 2);

find([2,3,5,7,11], 11)//, 4);

find([2,3,5,7,11], 3)//, 1);

find([2,3,5,7,11], 2)//, 0);

find([2,3,5,7,11], 1)//, not found
