// 3. Gegeven is een array[2, 4, 8, 9, 12, 13] gebruik een for-loop om al deze getallen bij elkaar op te tellen. (check info over array https://javascript.info/array). Volgende week gaan we nog uitgebreid in op array’s.
const myArray = [2, 4, 8, 9, 12, 13];
let sumOfNumbers = 0;
myArray.forEach(function(element, index, array){
  sumOfNumbers += element;
});
console.log('de som van de array is: ', sumOfNumbers);