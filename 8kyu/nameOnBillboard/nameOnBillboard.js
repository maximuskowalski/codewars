function billboard(name, price = 30){

    let sum = 0

    for(let i = 0; i < name.length; i++){
        sum = sum + price
    }

    console.log(sum)
    return sum

}

billboard("Jeong-Ho Aristotelis") // 600);
billboard("Abishai Charalampos") // 570);
billboard("Idwal Augustin") // 420);
billboard("Hadufuns John",20) // 260);
billboard("Zoroaster Donnchadh") // 570);
billboard("Claude Miljenko") // 450);
billboard("Werner Vígi",15) // 165);
billboard("Anani Fridumar") //, 420);
billboard("Paolo Oli") //, 270);
billboard("Hjalmar Liupold",40) //, 600);
billboard("Simon Eadwulf") //, 390);
