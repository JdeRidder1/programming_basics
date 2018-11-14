/* Maak een array groceryList waarin je de boodschappen en hun prijs opneemt. Denk aan JavaScript Objecten om dit netjes te doen.

Creëer op basis van deze array een tabel en schrijf de tabel naar de DOM.
Maak hierbij gebruik van een loop en liefst ook een functie.

Voeg de totaalprijs aan de tabel toe.
*/
const groceryList = [{
    'name': 'Tandenborstel',
    'price': 0.99
},
{
    'name': 'Deodorant',
    'price': 7.99
},
{
    'name': 'Bak meel',
    'price': 0.79
},
{
    'name': 'Wortels',
    'price': 2.99
}
];



const getTotalPrices = function (){
    let total = 0;
    let price = groceries.forEach(function(element, index, array){
        total += element.price;
        });
   
   //extra
        let priceReduce = groceries.reduce(function(total, value){
        return total + value.price;
    }, 0);
    return total;
}
createMyAwesomeTable();

function createMyAwesomeTable() {
/**
 *  table
 *      tr
 *          td
 *              tandenborstel
 *          td
 *              0.99
 */
const table = document.createElement('table');
for (let index = 0; index < groceryList.length; index++) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.id = 'name'+index;
    tdName.innerText = groceryList[index].name;
    const tdPrice = document.createElement('td');
    tdPrice.innerText = groceryList[index].price;
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    table.appendChild(tr);
}

const body = document.getElementById('body');
body.appendChild(table);
}