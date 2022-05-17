function findUniq(arr) {

    for ( let i = 0 ; i < arr.length ; i++ ) {
        if( arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i]) ) {
            console.log(arr[i])
            return arr[i]
        }
    }

}

// function tests

findUniq([ 1, 0, 0 ])//,1);
findUniq([ 0, 1, 0 ])//,1);
findUniq([ 0, 0, 1 ])//,1);
findUniq([ 1, 1, 1, 2, 1, 1 ])//,2);
findUniq([ 1, 1, 2, 1, 1 ])//,2);
findUniq([ 3, 10, 3, 3, 3 ])//,10);
