function updateLight(current) {
    if(current === 'green'){
        return 'yellow'
    }else if(current === 'yellow'){
        return 'red'
    }else{
        return 'green'
    }
}

// function tests

// For example, update_light('green') should return 'yellow'.

updateLight("green") // "yellow");
updateLight("yellow") // "red");
updateLight("red") // "green");
