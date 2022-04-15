function apple(x){
  Number(x) ** 2 > 1000 ? console.log(true) : console.log(false)

  return Number(x) ** 2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

// functions (tests)
apple('50') // 'It\'s hotter than the sun!!'
apple(4) // 'Help yourself to a honeycomb Yorkie for the glovebox.'
