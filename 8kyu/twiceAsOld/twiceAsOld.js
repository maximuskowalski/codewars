function twiceAsOld(dadYearsOld, sonYearsOld) {
    console.log( Math.abs(dadYearsOld - 2 * sonYearsOld) )
    return Math.abs(dadYearsOld - 2 * sonYearsOld)
  }

// function tests
twiceAsOld(36,7) // 22
twiceAsOld(55,30) // 5
twiceAsOld(42,21) // 0
twiceAsOld(22,1) // 20
twiceAsOld(29,0) // 29

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old
