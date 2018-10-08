/*  1.	Maak een functie die random een element uit de volgende array retourneert.
const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 
Tip: gebruik Math.random (zie bijvoorbeeld: https://www.geeksforgeeks.org/javascript-math-random-function/ ) */



function randomItem(lapRounds)
{
  
return lapRounds[Math.floor(Math.random()*lapRounds.length)];
     
}

const lapRounds = [
    "2.99",
    "3.00", 
    "3.01", 
    "4.01", 
    "2.79", 
    "2.88", 
    "3.10", 
    "4.12"
    ];
console.log('Random getal uit de lapRounds reeks: '+randomItem(lapRounds));





