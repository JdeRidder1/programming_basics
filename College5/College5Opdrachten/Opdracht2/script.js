/*
 * 2.   Schrijf een berekening van een Fibonacci reeks met while loop. Gebruik maximaal 10 getallen. Console.log ook de gehele getallenreeks
 */

function fibonacci(number) {

    var previous_first = 0, previous_second = 1, next = 1;

    for(var i = 2; i <= number; i++) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
    }
    return next;
};