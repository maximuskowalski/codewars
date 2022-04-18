function countWords(str) {

    str = str.trim()
    if(str == ''){return 0};
    let str2 = str.replace(/\s/g, " ");

    let strSingle = str2.replace(/  +/g, ' ');

    let arr = strSingle.split(' ')

    console.log(arr)

    console.log(arr.length)
    return arr.length

  }



// Function Tests

countWords("Hello")   //   1);
countWords("Hello, World!")   //   2);
countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")   //   19);
countWords("")   //   0);
countWords("With! Symbol@ #Around! (Every) %Word$")   //   5);
countWords("Dear   Victoria, I love  to press   space button.")   //   8);

countWords(" Arthur ")   //   1);
countWords(" David")   //   1);
countWords("Nelson ")   //   1);
countWords("  Hello Gomer  ")   //   2);
countWords("  Hello     Bart  ")   //   2);

countWords("﻿Hello﻿World ")   //   2);
countWords("Hello﻿World")   //   2);
