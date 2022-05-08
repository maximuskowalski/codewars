function animals(heads, legs){

    if( heads === 0 && legs ===0 ) return [0, 0]
    if( heads <= 0 || legs <= 0) return 'No solutions'
    if( heads < legs / 4 || legs % 2 !== 0 || legs < 2 * heads ) return 'No solutions'

    let cows = ( legs / 2 - heads )
    let chickens = heads - cows


    console.log ([chickens, cows])
    return [chickens, cows]
}

// 72 = a + b

// 2a + 4b = 200

// a + 2b = 100
// 2b = 100 - a

// function tests

animals(72, 200)   //  [44, 28])
animals(116, 282)   //  [91, 25])
animals(12, 24)   //  [12, 0])
animals(6, 24)   //  [0, 6])
animals(344, 872)   //  [252, 92])
animals(158, 616)   //  [8, 150])

animals(808, 256)


//   it ("Invalid number of animals", function() {
animals(25, 555)   //  "No solutions")
animals(12, 25)   //  "No solutions")
animals(54, 956)   //  "No solutions")
animals(5455, 54956)   //  "No solutions")

//   it ("Edge cases", function() {
animals(0, 0)   //  [0, 0])
animals(-1, -1)   //  "No solutions")
animals(-45, 5)   //  "No solutions")
animals(500, 0)   //  "No solutions")
animals(0, 500)   //  "No solutions")
animals(5, -55)   //  "No solutions")

// 75 heads - 200 legs
// Number of Heads = Number of Cows + Number of Chicken
// 75 = y + x

// Number of legs = Number of Cows × 4 + Number of Chicken × 2
// 200 = 4y + 2x

// x = 75 - y

// 200 = 4y + 2(75 - y)
// 200 = 4y + 150 - 2y
// 50 = 27
// y = 25
// x = 50

// legs = 4 cows + 2 ( Heads - Cows )

// legs = 4 x cows + heads x 2 - 2 x cows

// legs /2 - heads = cows
