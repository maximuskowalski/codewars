function yearDays(year){

    if(year == 0) console.log(`${year} has 366 days`)
    if(year == 0) return `${year} has 366 days`

    if(year%100 == 0 && year%400 !== 0) console.log(`${year} has 365 days`)
    if(year%100 == 0 && year%400 !== 0) return `${year} has 365 days`

    if(year%4 !== 0) console.log(`${year} has 365 days`)
    if(year%4 !== 0) return `${year} has 365 days`

    console.log(`${year} has 366 days`)
    return `${year} has 366 days`
}

// function tests
// yearDays(0) // '0 has 366 days');
// yearDays(-64) // '-64 has 366 days');
// yearDays(2016) // '2016 has 366 days');
// yearDays(1974) // '1974 has 365 days');
// yearDays(-10) // '-10 has 365 days');
// yearDays(666) // '666 has 365 days');
// yearDays(1857) // '1857 has 365 days');

yearDays(-1200) // 366

yearDays(1800) // 365
yearDays(-200) // 365
