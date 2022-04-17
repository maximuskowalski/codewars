const validateUsr = (username) => {
  let ok = '_1234567890abcdefghijklmnopqrstuvwxyz';
  if( username.length > 16 || username.length < 4 ) {
      console.log(false)
      return false;
  }
  for(let i = 0; i < username.length; i++) {
    if( !ok.includes(username[i]) ) {
        console.log(false)
        return false;
    }
  }
  console.log(true)
  return true;
}


validateUsr('asddsa')   //   true
validateUsr('a')   //   false
validateUsr('Hass')   //   false
validateUsr('Hasd_12assssssasasasasasaasasasasas')   //   false
validateUsr('')   //   false
validateUsr('____')   //   true
validateUsr('012')   //   false
validateUsr('p1pp1')   //   true
validateUsr('asd43 34')   //   false
validateUsr('asd43_34')   //   true
