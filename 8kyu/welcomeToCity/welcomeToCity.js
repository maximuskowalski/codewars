function sayHello( name, city, state ) {
    let arrString = name.join(' ')
    console.log(`Hello, ${arrString}! Welcome to ${city}, ${state}!`)
    return `Hello, ${arrString}! Welcome to ${city}, ${state}!`
}

// Function Test
sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// 'Hello, John Smith! Welcome to Phoenix, Arizona!'
