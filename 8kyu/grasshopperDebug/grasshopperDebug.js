function weatherInfo (temp) {
    var c = convertToCelsius(temp)
    console.log(c)
    if (c > 0){
      return (c + " is above freezing temperature")
    }else{
        return (c + " is freezing temperature")
    }
  }

  function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9)
    return celsius
  }

// function tests

weatherInfo(50) // '10 is above freezing temperature')
weatherInfo(23) //  '-5 is freezing temperature')
