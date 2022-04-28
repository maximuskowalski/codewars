function findDifference(a, b) {
    volumeA = a[0] * a[1] *a[2]
    volumeB = b[0] * b[1] *b[2]

    return (volumeA >= volumeB) ? volumeA - volumeB : volumeB - volumeA

}

// function tests
findDifference([3, 2, 5], [1, 4, 4])  //  14);
findDifference([9, 7, 2], [5, 2, 2])  //  106);
findDifference([11, 2, 5], [1, 10, 8])  //  30);
findDifference([4, 4, 7], [3, 9, 3])  //  31);
findDifference([15, 20, 25], [10, 30, 25])  //  0);
