//Schrijf een functie handleAnimalSounds(func,animal) die een van de vorige functies als parameter ontvangt 
//en  deze uitvoert met het juiste geluid of schrijven van het geluid

const handleAnimalSounds = function (func, animal){
    func(animal);
}

handleAnimalSounds(makeASound, 'cat');