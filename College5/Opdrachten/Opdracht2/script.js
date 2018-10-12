// Een Fibonacci getallenreeks is bijvoorbeeld: 
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
// Je ziet hier duidelijk dat elk getal de som is van de 2 voorafgaande getallen.
// 2. Schrijf een berekening van een Fibonacci reeks met while loop. Gebruik maximaal 10 getallen. Console.log ook de gehele getallenreeks. Tip: denk het eerst eens uit op papier. Heb je moeite met deze vraag. Probeer dan eerst de udacity course te volgen.

const fibonacci = function (num = 10) {
    let currentSum = 1;
    let lastSum = 0;
    let temporarySum = 0; //temp for switching numbers
  
    while (num >= 0) {
      temporarySum = currentSum; //
      currentSum = currentSum + lastSum;
      lastSum = temporarySum;
      //enter some console.logs for debugging purposes
      console.log('round', num);
      console.log('temporarySum', temporarySum);
      console.log('currentSum', currentSum);
      console.log('lastsum', lastSum);
      num--; 
    }
    /**
     *  num temporarySum  currentSum  lastSum 
     *  10  1             1 + 0       1   
     *  9   1             1 + 1       1 
     *  8   2             2 + 1       2
     *  7   3             3 + 2       3
     *  6   5             5 + 3       5
     */
    return lastSum;
  }
  console.log('fibonnaci van 5 is', fibonacci(5));