/*
 * 3.	Gegeven is een array[2, 4, 8, 9, 12, 13] gebruik een for-loop om al deze getallen bij elkaar op te tellen. 
 */

var sum = [2, 4, 8, 9, 12, 13].reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(sum); 