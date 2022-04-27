var min = function(list){
    list.sort((a, b) => a - b);
    console.log(list[0])
    return list[0];
}

var max = function(list){
    list.sort((a, b) => b - a);
    console.log(list[0])
    return list[0];
}

// function tests

min([-52, 56, 30, 29, -54, 0, -110]) //  -110
min([42, 54, 65, 87, 0])  // 0
max([4,6,2,1,9,63,-134,566]) // 566
max([5])  // 5
