// schrijf een productlist met Arrays + forLoop naar de console

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

products.push= 'cola';
console.table(products);


products.forEach(function (element) {
    console.log(element);
});

for (let index= 0 ; index < products.length; index++) {
    const element = products[index];
    console.log('Op index: ${index} staat element: ${element}');
}