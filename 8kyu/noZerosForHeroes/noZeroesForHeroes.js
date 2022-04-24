function noBoringZeros(n) {
    if ( n == 0 ){
        console.log(0)
        return 0
    }else{
        while( n%10 == 0) {
            n /= 10
        }
    }
    console.log(n)
    return n
  }

// function tests

noBoringZeros(1450)   //   145)
noBoringZeros(960000)   //   96)
noBoringZeros(1050)   //   105)
noBoringZeros(-1050)   //   -105)
noBoringZeros(-105)   //   -105)
noBoringZeros(0)   //   0)
