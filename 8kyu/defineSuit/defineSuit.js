function defineSuit(card) {
    if( card.includes('♠') ){
        console.log('spades')
        return 'spades'
    }else if( card.includes('♦') ){
        console.log('diamonds')
        return 'diamonds'
    }else if( card.includes('♥') ){
        console.log('hearts')
        return 'hearts'
    }else{
        console.log('clubs')
        return 'clubs'
    }
}

// Function Tests

defineSuit('Q♠')  //  'spades'
defineSuit('9♦')  //  'diamonds'
defineSuit('J♥')  //  'hearts'
