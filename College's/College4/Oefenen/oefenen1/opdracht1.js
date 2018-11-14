//* opdracht 3

const word = 'Geweldig';
let reverseWord = '';
let count = word.lenght; //9

while (count > 0 ) {
    reverseWord = reverseWord + word(count-1);
    console.log(reverseWord);
    count--;
}

console.log(reverseWord);

