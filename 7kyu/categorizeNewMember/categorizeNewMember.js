function openOrSenior(data){
    let newArr = []

    for (let i = 0; i < data.length; i++) {
        console.log(data[i][0])
        console.log(data[i][1])

            if( data[i][0] >= 55 && (data[i][1]) > 7 ) {
                console.log ('Senior')
                newArr.push('Senior')
            }else{
                console.log('Open')
                newArr.push('Open')
            }
    }
    console.log(newArr)
    return newArr
}

// Function Tests

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])    //    ['Open', 'Senior', 'Open', 'Senior']
openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])    //    ['Open', 'Open', 'Open', 'Open']
openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])    //    ['Senior', 'Open', 'Open', 'Open']
