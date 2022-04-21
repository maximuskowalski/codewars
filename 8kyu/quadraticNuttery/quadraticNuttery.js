function quadratic(x1, x2){
    // return [1, ]
    // x^2 - x2*x + x1*x2 = 0
    // 1 - x1-x2 = b x1*x2 = c

    return [1, -x1-x2, x1*x2]

    }

// https://www.codewars.com/kata/5d59576768ba810001f1f8d6/train/javascript

quadratic(0,1)  //   [1, -1, 0]);
quadratic(1,1)  //   [1, -2, 1]);
quadratic(-4,-9)  //   [1, 13, 36]);
quadratic(-5,-4)  //   [1, 9, 20]);
quadratic(4,-9)  //   [1, 5, -36]);
quadratic(5,-4)  //   [1, -1, -20]);
