function distinct(a) {
    return [...new Set(a)]
}

// function tests
distinct([1]) // [1]);
distinct([1,2]) // [1,2]);
distinct([1,1,2]) // [1,2]);
