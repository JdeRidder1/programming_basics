// 2. Maak opdracht 1 nu met behulp van het switch statement.

//option 1 - better to use a if-else in this case
const result = 7;

switch (true) {
    case (result < 6):
        console.log('helaas onvoldoende');
        break;
    case (result >= 6 && result < 7):
        console.log('voldoende');
        break;
    case (result >= 7 && result < 9):
        console.log('goed');
        break;
    case (result >= 9 && result <= 10):
        console.log('uitmuntend');
        break
    default:
        console.log('Dat is geen geldig resultaat', result);
        break;
}
// option 2 - a switch 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
const myResult = 'voldoende';

switch (myResult) {
    case 'onvoldoende':
        console.log('helaas onvoldoende');
        break;
    case 'voldoende':
        console.log('voldoende');
        break;
    case 'goed':
        console.log('goed');
        break;
    case 'uitmuntend':
        console.log('uitmuntend');
        break
    default:
        console.log('Dat is geen geldig resultaat', result);
        break;
}