//Schrijf een functie makeASound(animal)die op basis van het dier dat je invoert een geluid maakt. 
//Probeer op te zoeken hoe je een geluid kan afspelen in JS.

const products = [];
products[0] = 'tandenborstel';
products[1] = 'deodorant';
products[2] = 'bakmeel';
products[3] = 'wortels';
products[4] = 'tandpasta';
products[5] = 'sla';
products[6] = 'maggi';
products[7] = 'chips';
products[8] = 'wc papier';
products[9] = 'shampoo';
products[10] = 'tandenborstel';


let newProductsArray = [];
//
//
//


for (let index = 0; index < products.length; index++) {
    const element = 'Products' + index + ':' + products[index];
    newProductsArray.push(element);
}

let newProductsArray = products.map(function(element, index){
    const newElement = 'product $(index +1): ${element}';
    return newElement;
}

console.table(newProductsArray);