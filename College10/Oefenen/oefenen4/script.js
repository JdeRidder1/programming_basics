//Gebruik de .map functie om een ‘Product en nummer’ aan het begin van het product toe te voegen. Bijvoorbeeld zo:
//Product 1 : Tandenborstel
//Product 2: Deodorant
//Product 3: Bakmeel


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


//console.table(products(7));



let newProductsArray = products.map(funcion(element, index, array){
    let newElement = element.toUpperCase();
    return newElement;
});
 
console.log(newProductsArray);


