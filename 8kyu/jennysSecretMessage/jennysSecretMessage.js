function greet(name){
    if(name === "Johnny"){
        return "Hello, my love!"
    }else{
        return "Hello, " + name + "!";
    }
}

// function tests

greet("Jim")  //  "Hello, Jim!");
greet("Jane")  //  "Hello, Jane!");
greet("Simon")  //  "Hello, Simon!");

greet("Johnny")  //  "Hello, my love!");
