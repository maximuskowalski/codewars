function move (position, roll) {
    return position + 2 * roll
}

// function tests
move(0, 4) // 8);
move(3, 6) // 15);
move(2, 5) // 12);
