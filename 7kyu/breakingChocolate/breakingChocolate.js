function breakChocolate(n,m) {
    if(n*m <= 1) return 0
    return ( n * m - 1 )
}

// function tests

breakChocolate(5, 5)// , 24)
breakChocolate(1, 1)// , 0)
