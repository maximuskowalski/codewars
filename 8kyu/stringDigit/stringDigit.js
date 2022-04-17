String.prototype.digit = function() {
    console.log(this.length)
    if ( (this.length < 1) || (this.length >= 2) ){
        console.log(false)
        return false
    }else{
        console.log('pass')
        console.log(/^\d+$/.test(this))
        return (/^\d+$/.test(this))
    }
  };

''.digit() // false);
'7'.digit() // true);
' '.digit() // false);
'a'.digit() // false);
'a5'.digit() // false);
'14'.digit() // false);
