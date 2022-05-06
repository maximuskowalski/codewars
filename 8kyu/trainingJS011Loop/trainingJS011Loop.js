function grabDoll(dolls){
    let bag=[];

    for (let i = 0; i < dolls.length; i++) {

             if( bag.length >= 3 ){
                 break;
             }else if(dolls[i] === "Hello Kitty"|| dolls[i] === "Barbie doll" ) {
                bag.push(dolls[i])
            }else{
                continue
            }
    }
    console.log(bag)
    return bag
}


// . If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

// Function Tests

grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]) // ["Hello Kitty"]);
grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]) //["Hello Kitty","Hello Kitty"]);
grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]) //["Hello Kitty","Hello Kitty","Barbie doll"]);
grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]) // ["Barbie doll","Hello Kitty","Hello Kitty"]);
