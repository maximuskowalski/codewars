function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin === true) {

        sharkSpeed = sharkSpeed / 2;
        let youTime = pontoonDistance / youSpeed;
        let sharkTime = sharkDistance / sharkSpeed;

      console.log( (youTime < sharkTime) ? 'Alive!' : 'Shark Bait!' );
      return ( (youTime < sharkTime) ? 'Alive!' : 'Shark Bait!' );

    } else {

      let youTime = pontoonDistance / youSpeed;
      let sharkTime =sharkDistance / sharkSpeed;

      console.log( (youTime < sharkTime) ? 'Alive!' : 'Shark Bait!' );
      return ( (youTime < sharkTime) ? 'Alive!' : 'Shark Bait!' );

    }
  }

  // Function Tests
  shark(12, 50, 4, 8, true); //   "Alive!"
  shark(7, 55, 4, 16, true); //   "Alive!"
  shark(24, 0, 4, 8, true); //   "Shark Bait!"
