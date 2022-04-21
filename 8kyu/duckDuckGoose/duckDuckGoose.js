function duckDuckGoose(players, goose) {

    console.log(players[(goose -1 ) % players.length].name)

    return players[(goose -1 ) % players.length].name;

  }

// function tests

duckDuckGoose(['a', 'b', 'c', 'd'], 1) // should return a.name
duckDuckGoose(['a', 'b', 'c', 'd'], 5) // should return a.name
duckDuckGoose(['a', 'b', 'c', 'd'], 4) // should return d.name


// Expected: 'a', instead got: Player { name: 'a' }

// Log
// [ Player { name: 'a' },
//   Player { name: 'b' },
//   Player { name: 'c' },
//   Player { name: 'd' },
//   Player { name: 'c' },
//   Player { name: 'e' },
//   Player { name: 'f' },
//   Player { name: 'g' },
//   Player { name: 'h' },
//   Player { name: 'z' } ]
// 1

// asshat uses objects in tests as a gotcha
