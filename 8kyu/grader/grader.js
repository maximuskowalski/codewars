function grader(score) {
    if(score > 1) return 'F'
    if(score >= 0.9) return 'A'
    if(score >= 0.8) return 'B'
    if(score >= 0.7) return 'C'
    if(score >= 0.6) return 'D'
    return 'F'
}

// function tests
grader(0.7) //, "C");
grader(0.9) //, "A");
grader(0.6) //, "D");
