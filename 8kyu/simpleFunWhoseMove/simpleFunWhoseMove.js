function whoseMove(lastPlayer, win) {
    if(lastPlayer == 'black' && win == false || lastPlayer == 'white' && win == true) return 'white'
    if(lastPlayer == 'white' && win == false || lastPlayer == 'black' && win == true) return 'black'
}

whoseMove("black",false) // "white")

whoseMove("white",true) //"white")

whoseMove("white",false) //"black")
