// purchasedBook = true;
// job = ‘teacher’;
// inTrain = false;

// 3. Gegeven is de bovenstaande codesnippet. Maak een if-else statement die de waarden van de variabelen checkt. Als de 2 boolean variabelen ‘waar’ zijn en de job is ‘teacher’ dan moet in de console het volgende bericht worden getoond: ‘finally i can enjoy my book!’.  Voor alle andere mogelijkheden in de if-else structuur moet je ook een nette oplossing bedenken.
const purchasedBook = true;
const job = 'teacher';
const inTrain = true;

if (purchasedBook && job == 'teacher' && inTrain) {
    console.log('finally i can enjoy my book');
} else {
    console.log('because the if-else is false, i cannot enjoy my book');
}