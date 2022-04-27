const rps = (p1, p2) => {
    if(p1 === p2){
        console.log('Draw!')
        return 'Draw!'
    }else if( (p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'paper') ){
        console.log('Player 1 won!')
        return 'Player 1 won!'
    }else{
        console.log('Player 2 won!')
        return 'Player 2 won!'
    }
};

// function tests

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

rps('rock', 'scissors')  // Player 1 won!
rps('scissors', 'paper')  // Player 1 won!
rps('paper', 'rock')  // Player 1 won!



rps('scissors', 'rock') // Player 2 won!
rps('paper', 'scissors') // Player 2 won!
rps('rock', 'paper')//  Player 2 won!



rps('rock', 'rock') // 'Draw!');
rps('scissors', 'scissors') // 'Draw!');
rps('paper', 'paper')  // 'Draw!');
