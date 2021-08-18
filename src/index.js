const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [], ar = [];
    for (i = 0; i < expr.length / 2; i++) {
        arr[i] = expr[2 * i] + expr[2 * i + 1];
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 10) arr[i] = '.';
        if (arr[i] == 11) arr[i] = '-';
    }
    for (i = 0; i < arr.length / 5; i++) {
        ar[i] = [];
        for (j = i * 5; j < i * 5 + 5; j++) {
            ar[i].push(arr[j]);
        }
        ar[i] = ar[i].join('');
    }
    for (i = 0; i < ar.length; i++) {
        ar[i] = ar[i].replace(/0/g, '');
    }

    for (i = 0; i < ar.length; i++) {
        ar[i] = ar[i].replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
    }
    for (i = 0; i < ar.length; i++) {
        if (MORSE_TABLE[ar[i]])
            ar[i] = MORSE_TABLE[ar[i]];
    }
    return ar.join('');
}

module.exports = {
    decode
}