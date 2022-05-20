function rgb(r, g, b){

    if(r > 255) r = 255
    if(g > 255) g = 255
    if(b > 255) b = 255

    if(r < 0) r = 0
    if(g < 0) g = 0
    if(b < 0) b = 0

    r = r.toString(16)
    g = g.toString(16)
    b = b.toString(16)

    if(r.length < 2) r = '0' + r
    if(g.length < 2) g = '0' + g
    if(b.length < 2) b = '0' + b

    let hex = (r+g+b).toUpperCase()

    console.log(hex)
    return hex

}

rgb(225,84,11)//: expected 'E154B' to equal 'E1540B'


// function tests
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

rgb(0, 0, 0)//, '000000')
rgb(0, 0, -20)//, '000000')
rgb(300,255,255)//, 'FFFFFF')
rgb(173,255,47)//, 'ADFF2F')

// The RGB-to-hexadecimal converter algorithm is simple: make sure that your R, G, B (red, green, blue) values are in the range 0...255, convert R, G, B to hex strings, and then concatenate the three hex strings together. Convert RGB to Hex color values here:

// To convert a number to hexadecimal, call the toString() method on the number, passing it 16 as the base, e.g. num.toString(16)
