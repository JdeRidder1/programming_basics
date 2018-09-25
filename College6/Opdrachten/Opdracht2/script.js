//	Schrijf een functie countdown die van 10 - 1 aftelt 
//(dit wordt ook in de console getoond). 
//Geef aan de functie een jaartal parameter mee die als hij bij ‘0’ is zegt 
//‘Happy {jaartal}’.


function  countDown(num) {
var num = 11; 

while (num >=0){
  if (num === 11) {
    console.log("Countdown starts!"); 
  }else if (num === 0) {
    console.log("Happy 2018!");
  } else if (num === 1) {
      console.log(num+" second");
  }else {
    console.log(num+" seconds");
  } 
 num--;
}
}

console.log(countDown());