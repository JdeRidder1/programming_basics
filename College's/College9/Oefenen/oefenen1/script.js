/*
Maak een HTML pagina met daarin een unordedlist met de volgende listitems: tandenborstel, deodorant, bakmeel en wortels. 
//pro user tip probeer Emmet eens uit te zoeken in VSCode

1.  Probeer in JS alle list items uit de HTML te selecteren en toe te kennen aan een variabele.
2.  Probeer in JS het eerste list item te selecteren en toe te kennen aan een variabele
3.  Geef dit eerste element een andere styling dmv CSS

*/
//1
const allListItems = document.getElementsByTagName('li');
console.log(allListItems);

//2
const ul = document.getElementById('groceryList');
const firstChild = ul.firstChild;

console.log(firstChild);

firstChild.classList.add('standOut');