// 1.Maak een while loop die kijkt of een in een reeks getallen deelbaar zijn door 4.
let counter = 0;
while(counter < 25){
    if((counter % 4 == 0) && counter != 0){
        console.log('deelbaar door 4:', counter);
    }
    counter++;
}