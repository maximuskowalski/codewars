function oddOrEven(array) {
    let total = array.reduce( ( acc, item ) => acc + item, 0 )
    console.log(total)

    let answer = ( total % 2 === 0 ) ? 'even' : 'odd'
    console.log(answer)
    return answer
}

// function tests

//     it('Edge tests', () => {
oddOrEven([0])//, 'even')
oddOrEven([1])//, 'odd')
oddOrEven([])//, 'even')

//     it('Even tests', () => {
oddOrEven([0, 1, 5])//, 'even')
oddOrEven([0, 1, 3])//, 'even')
oddOrEven([1023, 1, 2])//, 'even')

//     it('Negative Even tests', () => {
oddOrEven([0, -1, -5])//, 'even')
oddOrEven([0, -1, -3])//, 'even')
oddOrEven([-1023, 1, -2])//, 'even')

//     it('Odd tests', () => {
oddOrEven([0, 1, 2])//, 'odd')
oddOrEven([0, 1, 4])//, 'odd')
oddOrEven([1023, 1, 3])//, 'odd')

//     it('Negative Odd tests', () => {
oddOrEven([0, -1, 2])//, 'odd')
oddOrEven([0, 1, -4])//, 'odd')
oddOrEven([-1023, -1, 3])//, 'odd')
