function mouthSize(animal) {
    animal = animal.toLowerCase()
    console.log( ( animal === 'alligator' ) ? 'small' : 'wide')
    return ( animal === 'alligator' ) ? 'small' : 'wide'
}

mouthSize("Toucan")   //   "wide"
mouthSize("ant bear")   //   "wide"
mouthSize("aLLigator")   //   "small"
