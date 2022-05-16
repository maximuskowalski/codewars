function isValidWalk(walk) {

    let sumV = 0
    let sumH = 0

    for (let i = 0; i < walk.length; i++) {
        if(walk[i] == 'n'){
            sumV++
        }
        if(walk[i] == 's'){
            sumV--
        }
        if(walk[i] == 'e'){
            sumH++
        }
        if(walk[i] == 'w'){
            sumH--
        }
    }

    console.log( sumV, sumH, walk.length)
    console.log( walk.length == 10 && sumV == 0 && sumH == 0 )

    return ( walk.length == 10 && sumV == 0 && sumH == 0 )

}


// function tests

isValidWalk(['n','s','n','s','n','s','n','s','n','s'])//, 'should return true');
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])//, 'should return false');
isValidWalk(['w'])//, 'should return false');
isValidWalk(['n','n','n','s','n','s','n','s','n','s'])//, 'should return false');


isValidWalk([ 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w' ]) // false
isValidWalk([ 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w' ]) // false
isValidWalk([ 'w', 's', 'w', 's', 'w', 's', 'w', 's', 'w', 's' ]) // false
