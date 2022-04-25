function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let answer = (blueStart - bluePulled) / ( blueStart - bluePulled + redStart - redPulled )
    console.log(answer)
    return answer
  }

guessBlue(5, 5, 2, 3)  // 0.6);
guessBlue(5, 7, 4, 3)  // 0.2);
guessBlue(12, 18, 4, 6)  //  0.4);
