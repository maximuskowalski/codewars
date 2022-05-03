var cubeChecker = function(volume, side){
    if(volume <= 0 || side <= 0) return false
    return ( volume === side**3);
  };
