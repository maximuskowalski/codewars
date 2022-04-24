function howManyDalmatians(number) {

    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

    let respond = (number <= 10) ? dogs[0] : (number <= 50) ? dogs[1]  : (number == 101) ?  dogs[3] : dogs[2]

    console.log(respond)
  return respond

}
  // function tests

howManyDalmatians(26) //"More than a handful!");
howManyDalmatians(8)  //   "Hardly any");
howManyDalmatians(14)  //   "More than a handful!");
howManyDalmatians(80)  //   "Woah that's a lot of dogs!");
howManyDalmatians(100)  //   "Woah that's a lot of dogs!");
howManyDalmatians(101)  //   "101 DALMATIANS!!!");
