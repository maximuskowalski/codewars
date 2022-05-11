function filter_list(l) {
    console.log(l.filter(x => typeof x === "number"))
    return l.filter(x => typeof x === "number");

}

// function tests

filter_list([1,2,'a','b']) // [1,2], 'For input [1,2,"a","b"]');
filter_list([1,'a','b',0,15]) // [1,0,15], 'For input [1,"a","b",0,15]');
filter_list([1,2,'aasf','1','123',123]) // [1,2,123], 'For input [1,2,"aasf","1","123",123]');
