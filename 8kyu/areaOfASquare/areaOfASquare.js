function squareArea(A){
    let r = (4 * A) / (2 * Math.PI)
    let area = r * r

    console.log(area.toFixed(2))
    return +(area.toFixed(2))
}


// C = 2πR
// A = 1/4 C
// 4A  = 2 Pie R
// r = 4A / (2 · π)


// function tests

squareArea(2) // 1.62)
squareArea(14.05) // 80)
squareArea(0) // 0)
