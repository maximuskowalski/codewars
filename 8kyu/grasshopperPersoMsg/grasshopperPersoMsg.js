function greet (name, owner) {
    return (name === owner) ? 'Hello boss' : 'Hello guest'
  }

  // function tests

greet('Daniel', 'Daniel') // 'Hello boss')
greet('Greg', 'Daniel') // 'Hello guest')
