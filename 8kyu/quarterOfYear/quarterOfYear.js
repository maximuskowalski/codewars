const quarterOf = (month) => {
    if( month <=3 ){
        console.log(1)
        return 1
    }else if( month <=6 ){
        console.log(2)
        return 2
    }else if( month <=9 ){
        console.log(3)
        return 3
    }else{
        console.log(4)
        return 4
    }

  }

  // function tests
quarterOf(3) // 1)
quarterOf(8) // 3)
quarterOf(11) // 4)
