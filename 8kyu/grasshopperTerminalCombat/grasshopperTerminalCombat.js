function combat(health, damage) {

    let answer = health - damage

    console.log( (answer <= 0) ? 0 : answer )
    return (answer <= 0 ) ? 0 : answer

}

// function tests

combat(100, 5)  //   95
combat(92, 8)  //   84
combat(20, 30)  //   0, "Health cannot go below 0");
