function buildString(...template){
    console.log(`I like ${template.join(', ')}!`)
    return `I like ${template.join(', ')}!`;
}


// function tests

buildString('Cheese','Milk','Chocolate')  //  'I like Cheese, Milk, Chocolate!', 'Return the correct String');
buildString('Cheese','Milk')  //  'I like Cheese, Milk!', 'Return the correct String');
buildString('Chocolate')  //  'I like Chocolate!', 'Return the correct String');
