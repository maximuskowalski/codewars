function odds(values){
    console.log( values.filter( ( e, i ) =>  e % 2 !== 0 ) );
    return values.filter( ( e, i ) =>  e % 2 !== 0 );
}

// function tests

odds([]) //  [], "Should handle empty array");
odds([2, 4, 6]) //  [], "Should handle array with even numbers only");
odds([1, 3, 5]) // [1, 3, 5], "Should handle array with odd numbers only");
odds([1, 2, 3, 4, 5, 6]) // [1, 3, 5], "Should handle mixed array");

