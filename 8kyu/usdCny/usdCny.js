function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`

}

// 6.75 CNY for every 1 USD.
// All answers to 2 dec places

// function tests

usdcny(15) // '101.25 Chinese Yuan');
usdcny(465) // '3138.75 Chinese Yuan');
