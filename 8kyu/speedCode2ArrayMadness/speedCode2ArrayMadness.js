function arrayMadness(a, b) {

    const aSumSquares = (a.map( e => e ** 2 )).reduce( ( acc, item ) => acc + item, 0 )
    let bSumCubes = (b.map( e => e ** 3 )).reduce( ( acc, item ) => acc + item, 0 )

    return aSumSquares > bSumCubes

}
