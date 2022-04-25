var replaceDots = function(str) {
    console.log(str.replace(/\./g, '-'))
    return str.replace(/\./g, '-');
  }

// function tests

replaceDots("one.two.three")// "one-two-three",
