function hexToDec(hexString){
    console.log(parseInt(hexString,16))
    return parseInt(hexString,16)
  }

// function tests

hexToDec("1") // 1);
hexToDec("a") // 10);
hexToDec("10") // 16);
hexToDec("FF") // 255);
hexToDec("-C") // -12);
