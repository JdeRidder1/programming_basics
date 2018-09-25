//Schrijf een functie facorial(num) die de factor van het ingevoerde nummer berekent.
// Je schijft het zo ‘5!’ wat wil zeggen: 1*2*3*4*5 = 120.




function factorial(num) {
    let product = 1;
    for(i = 1; i < num; i++) {
        let n = product * i;
        product += n;
    }
console.log(product);
}

factorial(9);