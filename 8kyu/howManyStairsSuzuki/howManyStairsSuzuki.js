function stairsIn20(s){

    s = [].concat.apply([], s)

    let total = s.reduce( ( acc, e ) => acc + e, 0 )

    return total * 20

}




// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20


