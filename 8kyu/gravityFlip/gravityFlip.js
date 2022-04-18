function flip(d, a) {
    if ( d == 'R') {
        console.log( a.sort(function(a, b){return a - b}) )
        return a.sort(function(a, b){return a - b})
    }else{
        console.log( a.sort(function(a, b){return b - a}) )
        return a.sort(function(a, b){return b - a})
    }

}

flip('R', [3, 2, 1, 2]) // [1, 2, 2, 3]);
flip('L', [1, 4, 5, 3, 5]) // [5, 5, 4, 3, 1]
