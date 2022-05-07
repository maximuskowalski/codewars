function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function(){
        draft = draft - (crew * 1.5)
        return(draft >20)? true : false;
    }
}

// Taking into account that an average
// crew member on board adds 1.5 units
//  to the draft, a ship that has a draft of
 //more than 20 without crew is considered worthy to loot.
 // Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt

// function tests

new Ship(0,0) // flase
new Ship(21,0) // true
