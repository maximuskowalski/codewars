function datingRange(age){

    let min = 0
    let max = 0

    if(age<=14){
        min = Math.floor(age - 0.10 * age)
        max = Math.floor(age + 0.10 * age)
    }else{
        min = Math.floor(age / 2 + 7)
        max = Math.floor(2 * (age - 7))
    }

    console.log(`${min}-${max}`)
    return `${min}-${max}`

}

// function tests

datingRange(17)  // "15-20")
datingRange(40)  // "27-66")
datingRange(15)  // "14-16")
datingRange(35)  // "24-56")
datingRange(10)  // "9-11")
