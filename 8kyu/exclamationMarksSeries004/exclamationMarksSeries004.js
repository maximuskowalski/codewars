function remove (string) {

    for(let i = 0; i <string.length; i++){
    string = string.replace('!','')
    }
    console.log(string+'!')
    return string+'!';
}

remove("Hi!")//  === "Hi!"
remove("Hi!!!")//  === "Hi!"
remove("!Hi")//  === "Hi!"
remove("!Hi!")//  === "Hi!"
remove("Hi! Hi!")//  === "Hi Hi!"
remove("Hi")//  === "Hi!"
