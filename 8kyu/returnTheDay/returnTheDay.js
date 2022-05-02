function whatday(num) {

    switch (num) {
        case 1:
            console.log('Sunday');
            return 'Sunday'
            break;
        case 2:
            console.log('Monday');
            return 'Monday'
            break;
        case 3:
            console.log('Tuesday');
            return 'Tuesday'
            break;
        case 4:
            console.log('Wednesday');
            return 'Wednesday'
            break;
        case 5:
            console.log('Thursday');
            return 'Thursday'
            break;
        case 6:
            console.log('Friday');
            return 'Friday'
            break;
        case 7:
            console.log('Saturday');
            return 'Saturday'
            break;
        default:
          console.log('Wrong, please enter a number between 1 and 7');
          return 'Wrong, please enter a number between 1 and 7'
      }

}

whatday(1) //'Sunday')
whatday(2) // 'Monday')
whatday(3) //,'Tuesday')
whatday(8) //,  'Wrong, please enter a number between 1 and 7')
whatday(20) //,  'Wrong, please enter a number between 1 and 7')
