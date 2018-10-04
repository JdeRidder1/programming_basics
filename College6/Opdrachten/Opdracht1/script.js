/*	Zet de uitwerking van de Fibonacci getallenreeks uit de vorige
     les om in een functie. */



function fibonacci(number) {

    var previous_first = 0, previous_second = 1, next = 1;

    for(var i = 2; i <= number; i++) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
    }
    return next;
};