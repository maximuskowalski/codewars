function stray(numbers) {

    numbers.sort((a, b) => a - b)

    if(numbers[0] == numbers[1]){
        return numbers[numbers.length - 1]
    }else{
        return numbers[0]
    }

}

// function tests

stray([1, 1, 2])// , 2);
stray([17, 17, 3, 17, 17, 17, 17])// ==> 3
