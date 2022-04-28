function correct(string){

    console.log(string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I"))
    return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I")

}

correct("L0ND0N") // "LONDON");
correct("DUBL1N") // "DUBLIN");
correct("51NGAP0RE") // "SINGAPORE");
correct("BUDAPE5T") // "BUDAPEST");
correct("PAR15") // "PARIS");

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
