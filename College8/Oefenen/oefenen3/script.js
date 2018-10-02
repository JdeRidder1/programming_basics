//3

//1. voeg aan je "me" object eens toe:
    //a. een nieuw object over je favoriete vervoersmiddel
    //b. een array met daarin vijf namen van huisdieren, familie

//2. Print de zin 'Mijn favoriete vervoersmiddel is de {vervoersmiddel} en die heeft {getal} aantal wielen."
    //door je benodigde info uit je geneste object te halen.

//3. print nu een voor een de namen uit de array, op vijf losse regels.


//1.
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

console.log(me);


//2.

console.log(`Mijn favoriete vervoersmiddel is de ${me.favoriteVehicle.name} en die heeft ${me.favoriteVehicle.numberWheels} wielen.`);


//3.(OPTIE 1 = normale forloop)

for (let i = 0; i < me.familyNames.lenght; i++) {
    console.log(me.familyNames[i]);
}

//3 (OPTIE 2 = for each loop)

me.familyNames.forEach(function(element) {
    console.log(element);
})


