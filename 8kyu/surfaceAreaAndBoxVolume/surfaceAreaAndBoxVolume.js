function getSize(width, height, depth) {

    let newArr = []

    newArr.push(2*(depth*width + depth*height + width*height))
    newArr.push(depth*width*height)

    return newArr

}

// surface area = 2*(l*w + l*h + w*h)

// volume = l*w*h


// function tests

getSize(4, 2, 6)  // [88, 48]);
getSize(10, 10, 10) // [600, 1000])
getSize(4, 2, 6)[0] // 88);
getSize(4, 2, 6)[1] // 48);
