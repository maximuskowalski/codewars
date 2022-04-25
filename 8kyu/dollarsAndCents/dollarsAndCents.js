function formatMoney(amount){

    console.log(`$${amount.toFixed(2)}`)
    return `$${amount.toFixed(2)}`
  }

  // function tests
formatMoney(39.99) // '$39.99', 'That\'s not formatted the way we expected.'
