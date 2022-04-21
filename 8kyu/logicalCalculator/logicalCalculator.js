//TODO cant work out this one yet
function logicalCalc(array, op){

    let state = true

    for(let i = 0; i < array.length; i++){
        if( op === 'AND'){
            state = state && array[i];
            console.log(state)
            return state
        }else if( op === 'OR'){
            state = state || array[i];
            console.log(state)
            return state
        }else{
            state = state ^ array[i];
            console.log(state)
            return state
        }
    }
}

// function tests

logicalCalc([true, true, true, false], "AND")    //  false);
logicalCalc([true, true, true, false], "OR")    //  true);
logicalCalc([true, true, true, false], "XOR")    //  true);
logicalCalc([true, true, false, false], "AND")    //  false);
logicalCalc([true, true, false, false], "OR")    //  true);
logicalCalc([true, true, false, false], "XOR")    //  false);
logicalCalc([true, false, false, false], "AND")    //  false);
logicalCalc([true, false, false, false], "OR")    //  true);
logicalCalc([true, false, false, false], "XOR")    //  true);
logicalCalc([true, true], "AND")    //  true);
logicalCalc([true, true], "OR")    //  true);
logicalCalc([true, true], "XOR")    //  false);
logicalCalc([false, false], "AND")    //  false);
logicalCalc([false, false], "OR")    //  false);
logicalCalc([false, false], "XOR")    //  false);
logicalCalc([false], "AND")    //  false);
logicalCalc([false], "OR")    //  false);
logicalCalc([false], "XOR")    //  false);
logicalCalc([true], "AND")    //  true);
logicalCalc([true], "OR")    //  true);
logicalCalc([true], "XOR")    //  true);

// https://www.codewars.com/kata/57096af70dad013aa200007b/javascript
