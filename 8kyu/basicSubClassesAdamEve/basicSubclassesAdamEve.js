class God{

      static create(){
        let newArray = []

        newArray.push(new Man())
        newArray.push(new Woman())

        return newArray
      }

}


class Human {}

class Man extends Human {}

class Woman extends Human {}
