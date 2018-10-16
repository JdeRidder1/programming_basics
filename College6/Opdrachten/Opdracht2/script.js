// 2. Schrijf een functie countdown die van 10 - 1 aftelt (dit wordt ook in de console getoond). Geef aan de functie een jaartal parameter mee die als hij bij ‘0’ is zegt ‘Happy {jaartal}’.

const finalCountDown = function (newYear) {
  let startingNumber = 11;
  while (startingNumber >= 0) {
    if (startingNumber === 11) {
        console.log("Starting the countdown to the new year!")
    }else if (startingNumber >= 2) {
          console.log("Nog maar " , startingNumber , " seconden...");
      }else if (startingNumber === 1) {
          console.log("Nog maar " , startingNumber , " seconde...");
      }else if (startingNumber === 0) {
          console.log("Happy" , newYear,"!!!");
      }
      startingNumber--;
    }
}

finalCountDown('2018');
