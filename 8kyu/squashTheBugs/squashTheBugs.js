function findLongest(str) {

    let spl = str.split(' ');
    let longest = 0

    for (let i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
        longest = spl[i].length
      }
    }
    console.log(longest)
    return longest
}

// function tests
findLongest("The quick white fox jumped around the massive dog")  // 7);
findLongest("Take me to tinseltown with you")  // 10);
findLongest("Sausage chops")  // 7);
findLongest("Wind your body and wiggle your belly")  // 6);
findLongest("Lets all go on holiday")  // 7);
