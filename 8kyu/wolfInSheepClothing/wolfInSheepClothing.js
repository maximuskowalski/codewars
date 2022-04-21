function warnTheSheep(queue) {
    queue = queue.reverse()
    console.log(queue.indexOf('wolf'))

    if(queue.indexOf('wolf') == 0) {
        console.log('Pls go away and stop eating my sheep')
        return 'Pls go away and stop eating my sheep'
    }else{
        console.log(`"Oi! Sheep number ${queue.indexOf('wolf')}! You are about to be eaten by a wolf!"`)
        return `Oi! Sheep number ${queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
    }

}

// function tests


warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])

// "Oi! Sheep number 2! You are about to be eaten by a wolf!"

warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
// "Oi! Sheep number 5! You are about to be eaten by a wolf!"

warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])
// "Oi! Sheep number 6! You are about to be eaten by a wolf!"

warnTheSheep(["sheep", "wolf", "sheep"])
// "Oi! Sheep number 1! You are about to be eaten by a wolf!"

warnTheSheep(["wolf"])
// "Pls go away and stop eating my sheep"

warnTheSheep(["sheep", "sheep", "wolf"])
// "Pls go away and stop eating my sheep"
