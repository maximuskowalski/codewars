function howMuchWater(water, load, clothes){
    if (clothes > 2*load){
        console.log('Too much clothes')
        return 'Too much clothes'
    } else if (clothes < load){
        console.log('Not enough clothes')
        return 'Not enough clothes'
    }else{
        console.log( +((water)*1.1**(clothes-load)).toFixed(2))
        return +((water)*1.1**(clothes-load)).toFixed(2)
    }
  }

// function tests

howMuchWater(10,10,21) // 'Too much clothes','');
howMuchWater(10,10,2) // 'Not enough clothes','');
howMuchWater(10,11,20) // 23.58,'');
howMuchWater(50,15,29) // 189.87,'');
