function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    let newBirds = birds.filter(x => geese.indexOf(x) === -1);

    console.log(newBirds);
    return newBirds

}



// If the test is not satisfied, findIndex() will return -1.

// function tests

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]) // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);

gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])  // ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]

gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]
