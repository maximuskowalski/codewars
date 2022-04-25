function isValid(formula){
    if ( (formula.includes(1) && formula.includes(2)) || (formula.includes(3) && formula.includes(4)) ){
        console.log(false)
        return false
    }else if((formula.includes(5) && !formula.includes(6)) || (!formula.includes(5) && formula.includes(6)) ){
        console.log(false)
        return false
    }else if(!(formula.includes(7) || formula.includes(8)) ){
        console.log(false)
        return false
    }else{
        console.log(true)
        return true
    }


  }

isValid([1,3,7])  //  true)
isValid([7,1,2,3])  //  false)
isValid([1,3,5,7])  //  false)
isValid([1,5,6,7,3])  //  true)
isValid([5,6,7])  //  true)
isValid([5,6,7,8])  //  true)
isValid([6,7,8])  //  false)
isValid([7,8])  //  true)
