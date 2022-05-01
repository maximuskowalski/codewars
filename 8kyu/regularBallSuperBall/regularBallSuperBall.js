class Ball {
    constructor(ballType = 'regular') {
      this.ballType = ballType
    }
  }

let ball1 = new Ball();
let ball2 = new Ball("super");

console.log(ball1)
console.log(ball2)
