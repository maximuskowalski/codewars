function distanceBetweenPoints(a, b) {

    console.log(a.x)
    console.log(a.y)
    console.log(b.x)
    console.log(b.y)



    let m = b.x - a.x;
    let p = b.y - a.y;

    console.log(Math.sqrt(p * p + m * m))
    return Math.sqrt(p * p + m * m);
}

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i][key] == value) {
//       result.push(arr[i]);
//     }
// }

// a[0][x]

// Point { x: 3, y: 3 }

// function tests

distanceBetweenPoints(new Point(3, 3), new Point(3, 3)) // 0);
distanceBetweenPoints(new Point(1, 6), new Point(4, 2)) // 5);
distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7))//toFixed(6)// 10.728001);
