function sameCase(a, b){
    if(( a.toUpperCase() != a.toLowerCase() ) && ( b.toUpperCase() != b.toLowerCase() )){
        console.log('arg 1 and arg 2 is letters');
        if ( ( (b == b.toUpperCase()) && (a == a.toUpperCase()) ) || ( (b == b.toLowerCase()) && (a == a.toLowerCase()) ) ){
            console.log('arg 1 and 2 same case true');
            console.log(1)
            return 1
        }else{
            console.log('different case')
            console.log(0)
            return 0
        }
    }else{
        console.log('its not letters');
        console.log(-1)
        return -1
    }
}

sameCase('C', 'B')  //  1
sameCase('b', 'a')  //  1
sameCase('d', 'd')  //  1
sameCase('A', 's')  //  0
sameCase('c', 'B')  //  0
sameCase('b', 'Z')  //  0
sameCase('\t', 'Z')  //  -1
sameCase('H', ':')  //  -1
