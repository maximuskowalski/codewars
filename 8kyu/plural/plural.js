function plural(n) {
    return n !== 1
}

// function tests
plural(0) // true, "Plural for 0");
plural(0.5) // true, "Plural for 0.5");
plural(1) // false, "Plural for 1");
plural(100) // true, "Plural for 100");
plural(Infinity) // true, "Plural for Infinity");
