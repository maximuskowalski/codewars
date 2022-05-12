function friend(friends){

    for (let i = 0, ln = friends.length; i < ln; i++) {
        friends[i] = friends[i].replace(/\d+/,"");
    }

    console.log( friends.filter(x => x.length === 4) )

    return friends.filter(x => x.length === 4)

}

// function tests

friend(["Ryan", "Kieran", "Mark"]) //, ["Ryan", "Mark"])
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]) //, ["Ryan"])
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]) //, ["Jimm", "Cari", "aret"])
friend(["Love", "Your", "Face", "1"]) //, ["Love", "Your", "Face"])
