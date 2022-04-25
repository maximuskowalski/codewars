function parseF(s) {

    let answer = parseFloat(s) ? parseFloat(s) : (s==0 && s!==false) ? 0 : null

    console.log( answer )
    return answer
  }

// function tests

parseF("1") // 1.0);
