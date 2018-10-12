// 2. Schrijf een functie countdown die van 10 - 1 aftelt (dit wordt ook in de console getoond). Geef aan de functie een jaartal parameter mee die als hij bij ‘0’ is zegt ‘Happy {jaartal}’.

const finalCountDown = function (newYear) {
  let startingNumber = 10;
  while (startingNumber >= 1) {
      console.log('Yup', startingNumber);
      if (startingNumber == 1) {
          console.log('Happy', newYear);
      }
      startingNumber--;
  }
}

finalCountDown('2018');