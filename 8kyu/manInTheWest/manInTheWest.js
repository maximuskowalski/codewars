function checkTheBucket(bucket){
    return bucket.includes('gold')
}

// function tests

checkTheBucket(["stone", "stone", "stone", "stone", "stone"]) //false);
checkTheBucket(["stone", "stone", "stone", "stone", "gold"]) // true);
checkTheBucket(["gold", "stone", "stone", "stone", "stone"]) // true);
checkTheBucket([]) // false);
checkTheBucket(["stone", "stone", "stone", "gold", "gold"]) // true);
