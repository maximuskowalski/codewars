function rentalCarCost(d) {
    if(d < 3){
        console.log(d * 40)
        return d * 40
    }else if( d < 7){
        console.log(d * 40 - 20)
        return d * 40 -20
    }else{
        console.log(d * 40 - 50)
        return d * 40 -50
    }
}

// function tests
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

//  it("Should work for under 3 days:", function() {
rentalCarCost(1)// 40);
rentalCarCost(2)// 80);

//  it("Should work for under 7 days:", function() {
rentalCarCost(3)// 100);
rentalCarCost(4)// 140);
rentalCarCost(5)// 180);
rentalCarCost(6)// 220);

//  it("Should work for 7 or more days:", function() {
rentalCarCost(7)// 230);
rentalCarCost(8)// 270);
rentalCarCost(9)// 310);
rentalCarCost(10)// 350);
