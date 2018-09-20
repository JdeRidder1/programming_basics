
let currentAction = 'booleans';

if (currentAction == 'calculating') {
    console.log('in Calculating');
    //optellen
    //vermenigvuldigen
    //aftrekken
    //delen
    const a = 10;
    const b = 11;
    console.log('optellen', a + b);
} else if (currentAction == 'strings') {
    console.log('in strings');
    const myString = 'my string';

    console.log(myString.toUpperCase());
    console.log('character at', myString.charAt(7));
    console.log('lengte van de string', myString.length);
    console.log('substring', myString.substring(3, 8));

} else if (currentAction == 'booleans') {
    console.log('in booleans');
    let score = 5;
    if (score >= 6);
    console.log('master');
}


const height = 1.89;
const weight = 94;
const bmi = weight / (height * height);
console.log(bmi);

if (bmi < 18, 5) {
    console.log('ondergewicht');
} else if (bmi >= 18, 5 && bmi < 24, 9) {
    console.log('prima');
} else if (bmi >= 25 && bmi < 29, 9) {
    console.log('bovengewicht');
} else if (bmi >= 30) {
    console.log('nog iets te veel')
} else {
    console.error('something went wrong')
}


