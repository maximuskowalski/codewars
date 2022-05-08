class Cat extends Animal {
  constructor(name){
      super(name)
      this.sound = 'meow'
  }
  speak(){
      return `${this.name} ${this.sound}s.`
  }

}


// Mr Whiskers meows.
