function drawStairs(n) {

    let string = 'I'

    for(let i = 1; i < n; i++){
        string = string + '\n' + ' '.repeat(i) + 'I'
    }

    console.log(string)
    return string
}

// function tests
drawStairs(1) // "I", "The first step has no padding on the left, just an 'I'"));
drawStairs(3) // "I\n I\n  I", "There's something wrong with these 3 steps"));
drawStairs(5) // "I\n I\n  I\n   I\n    I", "5-step stairs no good"));
