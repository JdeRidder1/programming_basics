/*
 * 1.   Maak een while loop die kijkt of een in een reeks getallen deelbaar zijn door 4.
 */

var x = 1;

while (x <= 100) {
    if ((x % 4 === 0)) {
        console.log(x + " is deelbaar door 4");
    }else {
        console.log(x + " is Niet deelbaar door 4"); 
    }
    x ++
}

