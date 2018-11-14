//Gegeven is de volgende array van productprijzen:

//const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];


//1. maak een functie die de som van alle prijzen berekent
//2. maak een functie die het gemiddelde van de prijzen berekent
//3. maak een functie die de hoogste product prijst uit de array kan halen.

const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];



//1.
const totalSum = function(anArray){
    let totalSum = 0;
    for (let index = 0; index < anArray.length; index++){
        totalSum = totalSum + anArray[index];
        //index 0: 0 --> 0 + 2.10
        //index 1: 2.10 --> 2.10 + 4.99
        //index 2: 7,09 --> 7.99 + 5.60
        // etc
        //total= 32,79
    }
    return totalSum; 
}

console.log(totalSum(productPrices));




//2.
const average = function(anArray){
    let newAverage = totalSum(anArray) / anArray.length;
    return newAverage;
};

console.log(average(productPrices));
        //3,64




//3.

