// 1.Maak een functie die random een element uit de volgende array retourneert.
// const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 
// Tip: gebruik Math.random (zie bijvoorbeeld: https://www.geeksforgeeks.org/javascript-math-random-function/ )

const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

const getRandomLapRound = function (min, max) {
    let randomIndex = lapRounds[Math.floor(Math.random()*lapRounds.length)];
    // Math.random gives a number between 0 and 1
    // Example: number between 2 and 6
    // Math.random gives 0.7. 
    // 0.7 * (6 - 2) = 2.8 
    // 2.8 + 2 = 4.8
    // randomIndex = Math.floor(4.8) = 4
    
    console.log(randomIndex);
}

getRandomLapRound(2, 6);

