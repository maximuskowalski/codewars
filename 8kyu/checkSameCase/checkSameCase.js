function sameCase(a, b){
  if(( a.toUpperCase() != a.toLowerCase() ) && ( b.toUpperCase() != b.toLowerCase() )){
    console.log('arg 1 and arg 2 is letters');
    if (b == b.toUpperCase()) {
      console.log('arg 1 upper case true');
     }
     if (b == b.toLowerCase()){
      console.log('arg 1 lower case true');
     }
  }else {
    console.log('its not letters');
  }
  // return 0;
}

sameCase('C', 'B')  //  1
sameCase('b', 'a')  //  1
sameCase('d', 'd')  //  1
sameCase('A', 's')  //  0
sameCase('c', 'B')  //  0
sameCase('b', 'Z')  //  0
sameCase('\t', 'Z')  //  -1
sameCase('H', ':')  //  -1
