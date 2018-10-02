//4.
//____________________________________________________________________
//4.1. Schrijf onderstaande opdrachtjes om in een functie
        //a. Print de zin 'mijn favoriete vervoersmiddel is de [vervoersmiddel] en die heeft [getal] wielen.' 
            //door de benodigde info uit je geneste object te halen
        //b. Print nu een voor een de namen uit de array, op vijf losse regels.

//4.2. Zet deze twee functies onder een zinnige naam in je 'me' object. Roep ze dan weer aan, zodat de juiste dingen geprint worden. 

//4.3. (!BONUS!) Je methodes mogen géén print statement bevatten. 




let me = {
    name: "Jasper",
    age: "21",
    previousDiploma: "Havo",
    favoriteVehicle: {
        name: "fiets",
        numberWheels: 2,
    },
    familyNames: [
        "bob1", "bob2", "bob3", "bob4", "bob5"
    ]
};




//4.1.a
let logFavoriteVehicle = function() {
console.log(`Mijn favoriete vervoersmiddel is de ${me.favoriteVehicle.name} en die heeft ${me.favoriteVehicle.numberWheels} wielen.`);
}

//4.1.b
let logFamilyNames= function () {
    console.log(familyNames= [
        "bob1", "bob2", "bob3", "bob4", "bob5"
    ])
}


//4.2
logFavoriteVehicle: function() {
    console.log(`Mijn favoriete vervoersmiddel is de ${me.favoriteVehicle.name} en die heeft ${me.favoriteVehicle.numberWheels} wielen.`)
}


//aanroepen
me.logFavoriteVehicle();