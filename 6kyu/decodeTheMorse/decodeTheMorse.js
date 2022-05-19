// The Morse code table is preloaded for you as a dictionary, feel free to use it:

// MORSE_CODE['.--']
// use as
// MORSE_CODE[codeString]

const MORSE_CODE = {
    '.-': 'A',
    '-…': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '….': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '…': 'S',
    '-': 'T',
    '..-': 'U',
    '…-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '…--': '3',
    '….-': '4',
    '…..': '5',
    '-….': '6',
    '--…': '7',
    '---..': '8',
    '----.': '9',
}

decodeMorse = function(morseCode){
    // split to a space separated array and account for the stupid extra spaces on start and end of string.
    // let array = morseCode.trim.split('   ')
    morseCode = morseCode.trim()

    let array = morseCode.split('   ')

    // split by characters now (' ') and translate
    let decode = array.map( a => a.split(' ').map( b => MORSE_CODE[b]).join('')).join(' ')

    console.log(decode)

}

// function tests
decodeMorse('.... . -.--   .--- ..- -.. .')//, 'HEY JUDE')
