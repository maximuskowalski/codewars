function areYouPlayingBanjo(name) {
  let x = name.toLowerCase().split('')
  if (x[0] === "r" ) {
    console.log(`${name} plays banjo`)
    return `${name} plays banjo`
  }else{
    console.log(`${name} does not play banjo`)
    return `${name} does not play banjo`
  }
}

areYouPlayingBanjo("Adam")  // ==> "Adam does not play banjo"
areYouPlayingBanjo("Paul")  // ==> "Paul does not play banjo"
areYouPlayingBanjo("Ringo")  // ==> "Ringo plays banjo"
areYouPlayingBanjo("bravo")  // ==> "bravo does not play banjo"
areYouPlayingBanjo("rolf")  // ==> "rolf plays banjo"
