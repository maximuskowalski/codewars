function calculateYears(principal, interest, tax, desired) {

    let years = 0

    for(let i = 0; principal < desired; i++){
        principal += (principal * interest) - (principal * interest * tax)
        years += 1
    }

    console.log(years)
    return(years)

}

// function tests
calculateYears(1000, 0.05, 0.18, 1100)//, 3)
calculateYears(1000,0.01625,0.18,1200)//, 14)
calculateYears(1000,0.05,0.18,1000)//, 0)
