String.prototype.isUpperCase = function() {

    let x = String(this)
    console.log( x === x.toUpperCase() )
    return x === x.toUpperCase()
}

"I AM DONALD".isUpperCase()


///
String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }
