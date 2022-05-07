function excludingVatPrice(price){

    return (price == null) ? -1 : +( (price * 100) / 115 ).toFixed(2)

}

// function tests

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1

excludingVatPrice(230) // 200.00);
excludingVatPrice(123) // 106.96);

// (price * 100) / 115 = answer
// answer.toFixed(2)
