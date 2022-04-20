function countPositivesSumNegatives(input) {

    // let answer = [ ( posArr.length ), sumNeg ]

    let answer = []

    if( Array.isArray(input) ){

            let posArr = input.filter(e => e > 0);
            let negArr = input.filter(e => e < 0);

            let sumNeg = negArr.reduce(function (a, b) {return a + b;}, 0);

            if( posArr.length != 0 || sumNeg != 0 ){
                console.log(posArr.length)
                answer.push(posArr.length)
                console.log(sumNeg)
                answer.push(sumNeg)
            }else{
                console.log('zeroes')
            }

    }else{
        console.log('woof')
    }

    // (posArr.length != 0) ? answer.push(posArr.length) : console.log('woof')
    // (sumNeg != 0) ? answer.push(sumNeg) : console.log('woof')

    console.log(answer)
    return answer

}


// Function Tests

let testData1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
countPositivesSumNegatives(testData1)
//    let expected = [10, -65];


let testData2 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
countPositivesSumNegatives(testData2);
//    let expected = [8, -50];

let testData3 = 'elephant';
countPositivesSumNegatives(testData3);
