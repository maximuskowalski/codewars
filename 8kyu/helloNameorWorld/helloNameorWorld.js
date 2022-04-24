function hello(name) {
    if (!name){
        console.log('Hello, World!')
        return 'Hello, World!'
    }else{
        console.log( `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!` )
        return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
    }
}

// function tests

hello('alice') // 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
hello() // 'Hello, World!', "returns 'Hello, World!' when name is not given");
hello('') // 'Hello, World!', "returns 'Hello, World!' when name is an empty string");
