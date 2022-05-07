// TODO: Refactor and shorten the function

function describeAge(age) {

    console.log(age)

    console.log(`You\'re a\(n\) ${(age<13)?'kid':(age<18)?'teenager':(age<65)?'adult':'elderly'}`)

    return `You\'re a\(n\) ${(age<13)?'kid':(age<18)?'teenager':(age<65)?'adult':'elderly'}`;
}




describeAge(9) //  "You're a(n) kid");
describeAge(10) //  "You're a(n) kid");
describeAge(11) //  "You're a(n) kid");
describeAge(12) //  "You're a(n) kid");
describeAge(13) //  "You're a(n) teenager");
describeAge(14) //  "You're a(n) teenager");
describeAge(15) //  "You're a(n) teenager");
describeAge(16) //  "You're a(n) teenager");
describeAge(17) //  "You're a(n) teenager");
describeAge(18) //  "You're a(n) adult");
describeAge(19) //  "You're a(n) adult");
describeAge(63) //  "You're a(n) adult");
describeAge(64) //  "You're a(n) adult");
describeAge(65) //  "You're a(n) elderly");
describeAge(66) //  "You're a(n) elderly");
describeAge(100) //  "You're a(n) elderly");
