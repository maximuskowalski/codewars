function remove (string) {
    while (string && string.slice(-1) == '!') {
        string = string.slice(0, -1)
    }
        return string
}

// function tests

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

