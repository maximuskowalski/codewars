function enough(cap, on, wait) {
    return (cap - on >= wait) ? 0 : wait - (cap - on)
}

// function tests

// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

enough(10, 5, 5) // 0);
enough(100, 60, 50) // 10);
enough(20, 5, 5) // 0);
